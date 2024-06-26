import { explorerTransactionURL, shortenTxHash } from '@/misc'
import { TransactionType } from '@/types'
import { Chain } from '@starknet-react/chains'
import Link from 'next/link'
import { toast as toastify } from 'react-toastify'
import { Box, MainText } from '@/components/Layout'

const toastContent = (transactionType: TransactionType, type: 'info' | 'success' | 'error') =>
  ({
    [TransactionType.Retrieve]: {
      error: 'error retrieving',
      info: 'retrieving...',
      success: 'retrieve successful!'
    },
    [TransactionType.Store]: {
      error: 'error storing',
      info: 'storing...',
      success: 'store successful!'
    }
  })[transactionType][type]

interface ToastProps {
  action: TransactionType
  chain: Chain
  transactionHash?: string
  type?: 'info' | 'success' | 'error'
}

export const toast = ({ action, chain, transactionHash, type = 'info' }: ToastProps) => {
  toastify[type](
    <Box col className='ml-4 items-start'>
      <MainText heading className='text-white'>
        {toastContent(action, type)}
      </MainText>
      {transactionHash && (
        <Link href={explorerTransactionURL(transactionHash, chain)} target='_blank' rel='noopener noreferrer'>
          <MainText heading className='text-sm'>
            tx hash:{' '}
          </MainText>
          <MainText heading className='text-blue-600 underline'>
            {shortenTxHash(transactionHash)}
          </MainText>
        </Link>
      )}
    </Box>,
    {
      style: {
        border: '0.5px solid rgb(61, 61, 61)',
        borderRadius: '0.375rem',
        backgroundColor: 'rgba(19, 19, 19, 0.8)',
        padding: '0.75rem 1.5rem 0.75rem 0.75rem',
        width: '400px'
      }
    }
  )
}
