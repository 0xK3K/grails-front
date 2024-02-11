import { Box, Container, MainText } from '@/components/Layout'
import { useAccount } from '@starknet-react/core'

export default function Mint() {
  const { isConnected } = useAccount()

  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='min-h-[70vh]'>
        {!isConnected ? (
          <MainText heading>welcome, adventurer, connect your wallet to begin</MainText>
        ) : (
          <MainText heading>the initiation quest will start soon...</MainText>
        )}
        {/*) : isWhitelisted ? (
          <Box col center>
            <Box col center>
              <MainText heading>your name is worthy, and you have been granted passage</MainText>
              <MainText heading>you can acquire up to {allocation} remaining items</MainText>
              <MainText heading>each item will cost you 0.04 eth</MainText>
            </Box>
            <Box className='anim-pulsate my-6'>
              <Image src={`/assets/${item}.png`} alt='item' width={80} height={80} />
            </Box>
            <Box center>
              <Button onClick={handleCTA}>
                <MainText heading>
                  mint {amount} item{amount > 1 ? 's' : ''}
                </MainText>
              </Button>
              <Box col center className='ml-2'>
                <div
                  onClick={() => setAmount((state) => Math.min(allocation, state + 1))}
                  className='-mb-1 cursor-pointer'
                >
                  <KeyboardArrowUp fontSize='small' />
                </div>
                <div onClick={() => setAmount((state) => Math.max(1, state - 1))} className='-mt-1 cursor-pointer'>
                  <KeyboardArrowDown fontSize='small' />
                </div>
              </Box>
            </Box>
          </Box>
        ) : (
          <MainText heading>it would appear your name lacks renown for the initiation quest, adventurer</MainText>
        )*/}
      </Box>
    </Container>
  )
}
