import { Box, Container, MainText } from '@/components/Layout'
import { useAccount } from '@starknet-react/core'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  const { isConnected } = useAccount()

  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='min-h-[70vh]'>
        <Box col className='max-w-[50vw]'>
          <Box center className='mb-6'>
            <Box center className='mr-6'>
              <Image src='/assets/weapon.png' alt='' width={80} height={80} />
            </Box>
            <Box center>
              <Image src='/assets/character.png' alt='' width={80} height={80} />
            </Box>
            <Box center className='ml-6'>
              <Image src='/assets/item.png' alt='' width={80} height={80} />
            </Box>
            <Box center className='ml-6'>
              <Image src='/assets/armor.png' alt='' width={80} height={80} />
            </Box>
            <Box center className='ml-6'>
              <Image src='/assets/potion.png' alt='' width={88} height={88} />
            </Box>
          </Box>
          <MainText heading>
            a collection of 10,000 items on starknet
            <div className='my-2'>collect. trade. build. find grails.</div>
            powered by the erc404 standard
          </MainText>
          <Box center className='mt-6'>
            <MainText heading className='text-gray-500 transition ease-in-out hover:cursor-pointer hover:text-gray-400'>
              <Link target='_blank' rel='noreferrer noopener' href='https://x.com/grails_erc404'>
                FOLLOW GRAILS ON X
              </Link>
            </MainText>
            {!isConnected ? (
              <div className='mx-5' />
            ) : (
              <MainText
                heading
                className='mx-10 text-gray-500 transition ease-in-out hover:cursor-pointer hover:text-gray-400'
              >
                <Link href='/mint'>MINT</Link>
              </MainText>
            )}
            <MainText heading className='text-gray-500 transition ease-in-out hover:cursor-pointer hover:text-gray-400'>
              <Link target='_blank' rel='noreferrer noopener' href='https://t.me/Grails_404'>
                JOIN US ON TELEGRAM
              </Link>
            </MainText>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
