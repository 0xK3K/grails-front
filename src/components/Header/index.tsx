import { Box, MainText } from '@/components/Layout'
import { useAppSelector } from '@/hooks'
import { shortenAddress } from '@/misc'
import { selectPendingTransactions } from '@/store/appSlice'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  Spinner
} from '@nextui-org/react'
import WalletModal from '@/components/WalletModal'
import { useAccount, useDisconnect } from '@starknet-react/core'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const pendingTransactions = useAppSelector(selectPendingTransactions)

  return (
    <Navbar className='z-50 mb-10 bg-transparent' maxWidth='2xl'>
      <NavbarBrand className='w-[20%]'>
        <Link href='/'>
          <Image src='/assets/grail.png' width={40} height={40} alt='' />
        </Link>
      </NavbarBrand>
      <NavbarContent justify='center'>
        <Link href='/backpack' className='mx-4 flex'>
          <MainText heading>BACKPACK</MainText>
        </Link>
        <Link href='/vault' className='mx-4 flex'>
          <MainText heading>VAULT</MainText>
        </Link>
      </NavbarContent>
      <NavbarContent justify='end' className='w-[20%]'>
        {!!pendingTransactions.length && (
          <Box center className='relative'>
            <MainText heading className='absolute text-sm'>
              {pendingTransactions.length}
            </MainText>
            <Spinner color='white' size='sm' />
          </Box>
        )}
        {address ? (
          <Dropdown type='menu' classNames={{ content: 'p-0 bg-transparent' }} placement='bottom-end'>
            <DropdownTrigger>
              <Button variant='ghost' className='border-none'>
                <MainText heading className='cursor-pointer text-white'>
                  {shortenAddress(address)}
                </MainText>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label='Custom item styles'
              disabledKeys={['profile']}
              className='rounded-md border-1 border-gray-400/20 p-1'
              itemClasses={{
                base: ['text-gray-500', 'transition-opacity', 'data-[hover=true]:text-gray-400']
              }}
            >
              <DropdownItem variant='bordered' className='border-none text-end'>
                <Link href='/mint' className='block w-full'>
                  <MainText heading>MINT</MainText>
                </Link>
              </DropdownItem>
              <DropdownItem variant='bordered' className='border-none text-end'>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full'
                  href='https://www.geckoterminal.com/starknet-alpha/pools/0x2ac952e8e5324e77b65ff7f91558ac270ba535f3d394ccd2175dc6530b8f110'
                >
                  <MainText heading>CHART</MainText>
                </Link>
              </DropdownItem>
              <DropdownItem variant='bordered' className='border-none text-end'>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full'
                  href='https://app.avnu.fi/en?amount=1&tokenFrom=0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7&tokenTo=0x02a819b93cc69b45ee5d1a1bfc16954c16f6d35c3873a06c97b95c009bfe502b'
                >
                  <MainText heading>BUY</MainText>
                </Link>
              </DropdownItem>
              <DropdownItem variant='bordered' className='border-none text-end'>
                <div onClick={() => disconnect()}>
                  <MainText heading>DISCONNECT</MainText>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <WalletModal />
        )}
      </NavbarContent>
    </Navbar>
  )
}
