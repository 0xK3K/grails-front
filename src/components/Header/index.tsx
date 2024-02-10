import { MainText } from '@/components/Layout'
import { shortenAddress } from '@/misc'
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import WalletModal from '@/components/WalletModal'
import { useAccount, useDisconnect } from '@starknet-react/core'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <>
      <Navbar className='gradient-dark-element bg-main/20 relative !sticky z-50 mb-10' maxWidth='2xl'>
        <NavbarBrand>
          <Link href='/'>
            <Image src='/assets/item.png' width={40} height={40} alt='' />
          </Link>
        </NavbarBrand>
        <NavbarContent justify='end'>
          {address ? (
            <div onClick={() => disconnect()} className='cursor-pointer'>
              <MainText heading className='text-white'>
                {shortenAddress(address)}
              </MainText>
            </div>
          ) : (
            <WalletModal />
          )}
        </NavbarContent>
      </Navbar>
    </>
  )
}
