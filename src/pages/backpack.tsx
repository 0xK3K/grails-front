import { Box, Container, MainText } from '@/components/Layout'
import { abis, getContracts, metadata, serializeAddress } from '@/misc'
import { Spinner } from '@nextui-org/react'
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

  const ids = useMemo(() => (data as Array<bigint>)?.map((id) => Number(id.toString())) || [], [data])
  const items = useMemo(
    () =>
      ids.map((id) => ({
        id,
        type: metadata[id - 1].type
      })),
    [ids]
  )

  const animation = useCallback((type: string) => {
    switch (type) {
      case 'Grail':
        return 'animate-[boxPulse_5s_ease-in-out_infinite_alternate]'
      case 'Weapon':
      case 'Armor':
      case 'Potion':
        return 'animate-[boxBounce_5s_ease-in-out_infinite_alternate]'
    }
  }, [])

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
          <Box center className={`mx-auto max-w-[1200px] flex-wrap`}>
            {items.map(({ id, type }, index) => (
              <Box key={index} col center className='m-3'>
                {type ? (
                  <Image
                    src={`/assets/${type.toLowerCase()}.png`}
                    alt=''
                    width={120}
                    height={120}
                    className={animation(type)}
                  />
                ) : (
                  <Box center className='size-[120px]'>
                    <Spinner color='white' />
                  </Box>
                )}
                <MainText heading>ID: {id}</MainText>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Container>
  )
}
