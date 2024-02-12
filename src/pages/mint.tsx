import { Box, Container, MainText } from '@/components/Layout'
import { useAccount } from '@starknet-react/core'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

export default function Mint() {
  const { isConnected } = useAccount()

  const [number, setNumber] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((state) => (state === 4 ? 0 : state + 1))
    }, 2500)

    return () => {
      clearInterval(interval)
    }
  }, [setNumber])

  const item = useMemo(() => {
    switch (number) {
      case 0:
        return 'item'
      case 1:
        return 'character'
      case 2:
        return 'armor'
      case 3:
        return 'potion'
      case 4:
        return 'weapon'
    }
  }, [number])

  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='min-h-[70vh]'>
        {!isConnected ? (
          <MainText heading>welcome, adventurer, connect your wallet to begin</MainText>
        ) : (
          <Box col center>
            <Box col center>
              <MainText heading>the initiation quest has completed</MainText>
              <MainText heading>each item now in the hands of an adventurer</MainText>
              <MainText heading>the realm awaits them on their next quest</MainText>
            </Box>
            <Box className='anim-pulsate my-6'>
              <Image src={`/assets/${item}.png`} alt='item' width={80} height={80} />
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  )
}
