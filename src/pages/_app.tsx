import Header from '@/components/Header'
import { PendingTransactionsProvider } from '@/contexts/PendingTransactions'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import Head from 'next/head'
import { Provider as ReduxProvider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import StarknetConfigWrapper from '@/components/StarknetConfigWrapper'
import { store } from '@/store'
import { ToastContainer } from 'react-toastify'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000
          }
        }
      })
  )

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/favicon/android-chrome-512x512.png' />
        <link rel='apple-touch-icon' type='image/png' href='/favicon/apple-touch-icon.png' />
        <title>Grails</title>
      </Head>
      <main className='text-foreground dark'>
        <NextUIProvider>
          <QueryClientProvider client={queryClient}>
            <ReduxProvider store={store}>
              <StarknetConfigWrapper>
                <ToastContainer
                  position='bottom-right'
                  autoClose={3000}
                  newestOnTop
                  pauseOnFocusLoss
                  draggable={false}
                  pauseOnHover={false}
                />
                <Header />
                <PendingTransactionsProvider>
                  <Component {...pageProps} />
                </PendingTransactionsProvider>
              </StarknetConfigWrapper>
            </ReduxProvider>
          </QueryClientProvider>
        </NextUIProvider>
      </main>
    </>
  )
}
