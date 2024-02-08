import { Box, Container, MainText } from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='min-h-[90vh]'>
        <Box col className='max-w-[50vw]'>
          <Box center className='mb-6'>
            <Image src='/assets/item.png' alt='' width={88} height={88} />
          </Box>
          <MainText>
            A COLLECTION OF 10,000 GRAILS, BOUND TO THE ERC404 STANDARD INTRODUCED BY PANDORA, AN EXPERIMENTAL TOKEN
            STANDARD ENABLING PERSISTENT LIQUIDITY AND SEMI-FUNGIBILITY FOR STARKNET NFTS. OUR WEBSITE IS CURRENTLY
            RECEIVING UPDATES.
          </MainText>
          <Box center className='mt-4'>
            <MainText heading className='text-gray-500 transition ease-in-out hover:cursor-pointer hover:text-gray-400'>
              <Link target='_blank' rel='noreferrer noopener' href='https://x.com/grails_erc404'>
                FOLLOW GRAILS ON X
              </Link>
            </MainText>
            <MainText
              heading
              className='ml-6 text-gray-500 transition ease-in-out hover:cursor-pointer hover:text-gray-400'
            >
              <Link target='_blank' rel='noreferrer noopener' href='https://t.me/grails404'>
                JOIN US ON TELEGRAM
              </Link>
            </MainText>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
