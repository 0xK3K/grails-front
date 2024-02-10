import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react'
import { useAccount, useConnect } from '@starknet-react/core'
import { MainButton, MainText } from '@/components/Layout'

const CONNECTOR_METADATA: {
  [id: string]: { name: string; logo: string }
} = {
  argentX: {
    name: 'ArgentX',
    logo: '/wallets/argent.svg'
  },
  argentMobile: {
    name: 'Argent Mobile',
    logo: '/wallets/argent-mobile.svg'
  },
  braavos: {
    name: 'Braavos',
    logo: '/wallets/braavos.svg'
  }
}

export default function WalletModal() {
  const { isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 1500)
    }
  }, [copied])

  return (
    <>
      <MainButton onClick={onOpen}>
        <MainText heading className='text-white'>
          connect wallet
        </MainText>
      </MainButton>
      <Modal
        backdrop='blur'
        hideCloseButton
        isOpen={isOpen}
        radius='sm'
        onOpenChange={onOpenChange}
        classNames={{
          body: 'py-6',
          base: 'bg-[#141414]',
          header: 'gradient-fire-b',
          footer: 'gradient-fire-t'
        }}
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              {!isConnected &&
                connectors.map((connector, index) => (
                  <MainButton
                    key={index}
                    isDisabled={!connector.available()}
                    onClick={() => {
                      connect({ connector })
                      onClose()
                    }}
                    className='p-8'
                    startContent={
                      <div className='mr-2'>
                        <Image
                          src={CONNECTOR_METADATA[connector.id].logo}
                          width={20}
                          height={20}
                          alt={CONNECTOR_METADATA[connector.id].name}
                        />
                      </div>
                    }
                  >
                    <MainText heading className='text-white'>
                      connect with {CONNECTOR_METADATA[connector.id].name}
                    </MainText>
                  </MainButton>
                ))}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
