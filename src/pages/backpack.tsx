import { Box, Container, MainText } from '@/components/Layout'
import { abis, getContracts, serializeAddress } from '@/misc'
import { useAccount, useContractRead, useNetwork } from '@starknet-react/core'
import Image from 'next/image'
import { useCallback, useMemo } from 'react'

export default function Backpack() {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()

  const { data } = useContractRead({
    address: getContracts(chain)!.grails,
    abi: abis.grails,
    args: address ? [serializeAddress(address)] : [],
    enabled: !!address,
    functionName: 'owned'
  })

  const animation = useCallback((n: number) => {
    switch (n) {
      case 1:
        return 'animate-[boxBounce_5s_ease-in-out_infinite_alternate]'
      case 2:
        return 'animate-[boxPulse_5s_ease-in-out_infinite_alternate]'
      case 3:
        return 'animate-[boxScale_5s_ease-in-out_infinite_alternate]'
    }
  }, [])

  const ids = useMemo(() => (data as Array<bigint>)?.map((id) => Number(id.toString())) || [], [data])
  const gridStyle = useMemo(() => {
    const length = ids.length
    return `grid-cols-${Math.min(3, length)} gap-6 sm:grid-cols-${Math.min(4, length)} md:grid-cols-${Math.min(5, length)} lg:grid-cols-${Math.min(6, length)}`
  }, [ids.length])

  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='my-20'>
        <MainText heading className='text-3xl'>
          backpack
        </MainText>
      </Box>
      <Box center>
        {!isConnected ? (
          <MainText heading>welcome, adventurer, connect your wallet to see your items</MainText>
        ) : !ids.length ? (
          <MainText heading>your inventory is empty...</MainText>
        ) : (
          <Box className={`mx-auto grid max-w-[1200px] px-4 sm:px-6 lg:px-8 ${gridStyle}`}>
            {ids.map((id) => (
              <Box col center className='m-3'>
                <Image
                  src={`/assets/box_${(id % 4) + 1}.png`}
                  alt=''
                  width={120}
                  height={120}
                  className={animation((id % 4) + 1)}
                />
                <MainText heading>ID: {id}</MainText>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Container>
  )
}
