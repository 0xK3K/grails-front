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
    <Navbar className='bg-main/20 z-50 mb-10' maxWidth='2xl'>
      <NavbarBrand>
        <Link href='/'>
          <Image src='/assets/item.png' width={40} height={40} alt='' />
        </Link>
      </NavbarBrand>
      <NavbarContent justify='end'>
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
                <Link href='/items'>
                  <MainText heading>ITEMS</MainText>
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
