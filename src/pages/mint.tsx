import { Box, Container, MainText } from '@/components/Layout'
import { useAccount } from '@starknet-react/core'

export default function Index() {
  const { isConnected } = useAccount()

  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='min-h-[70vh]'>
        <MainText heading>
          {!isConnected
            ? 'welcome, adventurer, connect your wallet to begin'
            : 'it would appear your name lacks renown for the initiation quest, adventurer'}
        </MainText>
      </Box>
    </Container>
  )
}
