import { Box, Container, MainText } from '@/components/Layout'
import { useAccount } from '@starknet-react/core'

export default function Index() {
  const { isConnected } = useAccount()

  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='min-h-[70vh]'>
        {!isConnected ? (
          <MainText heading>welcome, adventurer, connect your wallet to see your items</MainText>
        ) : (
          <MainText heading>your inventory is empty...</MainText>
        )}
      </Box>
    </Container>
  )
}
