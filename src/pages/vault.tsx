import { Box, CheckIcon, Container, MainText } from '@/components/Layout'
import { useDispatch } from '@/hooks'
import { abis, getContracts, metadata, serializeAddress, serializeU256, toast } from '@/misc'
import { addPendingTransaction } from '@/store/appSlice'
import { TransactionType } from '@/types'
import { Button, Spinner } from '@nextui-org/react'
import { useAccount, useContractRead, useContractWrite, useNetwork } from '@starknet-react/core'
import Image from 'next/image'
import { useCallback, useMemo, useState } from 'react'
import { Call, num } from 'starknet'

export default function Vault() {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const dispatch = useDispatch()

  const [idsToRetrieve, setIdsToRetrieve] = useState<Set<number>>(new Set())

  const { data: stored, isLoading } = useContractRead({
    address: getContracts(chain)!.vault,
    abi: abis.vault,
    args: address ? [serializeAddress(address)] : [],
    enabled: !!address,
    functionName: 'stored'
  })

  const ids = useMemo(() => (stored as Array<bigint>)?.map((id) => Number(id.toString())) || [], [stored])
  const items = useMemo(
    () =>
      ids.map((id) => ({
        id,
        type: metadata[id - 1].type
      })),
    [ids]
  )
  const amountToRetrieve = useMemo(() => [...idsToRetrieve].length, [idsToRetrieve])

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

  const calls = useMemo(() => {
    if (address) {
      const contracts = getContracts(chain)!

      try {
        const retrieve: Array<Call> = [...idsToRetrieve].map((id) => ({
          contractAddress: contracts.vault,
          entrypoint: 'retrieve',
          calldata: [...serializeU256(id.toString())]
        }))

        return [...retrieve]
      } catch (error) {
        console.error('Failed to generate call data', error)
      }
    }
  }, [address, chain, idsToRetrieve])

  const { writeAsync } = useContractWrite({ calls })

  const handleCTA = useCallback(async () => {
    try {
      const { transaction_hash: hash } = await writeAsync()
      toast({ action: TransactionType.Retrieve, chain, transactionHash: hash, type: 'info' })
      dispatch(addPendingTransaction({ action: TransactionType.Retrieve, hash: num.toStorageKey(hash) }))
    } catch (e) {}
  }, [chain, dispatch, writeAsync])

  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='my-20'>
        <MainText heading className='text-3xl'>
          vault
        </MainText>
      </Box>
      <Box center>
        {!isConnected ? (
          <MainText heading>welcome, adventurer, connect your wallet to see the content of your vault</MainText>
        ) : isLoading ? (
          <Spinner color='white' className='mt-12' />
        ) : !ids.length ? (
          <Box col center>
            <MainText heading className='mb-3'>
              your vault is empty
            </MainText>
            <MainText heading>add items to your vault from the backpack</MainText>
          </Box>
        ) : (
          <Box col center>
            <Box center className={`mx-auto max-w-[1200px] flex-wrap`}>
              {items.map(({ id, type }, index) => (
                <Box
                  onClick={() => {
                    if (idsToRetrieve.has(id)) {
                      setIdsToRetrieve((state) => new Set([...state].filter((item) => item !== id)))
                    } else {
                      setIdsToRetrieve((state) => new Set([...state, id]))
                    }
                  }}
                  key={index}
                  col
                  center
                  className='relative m-3 cursor-pointer'
                >
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
                  <Box center>
                    <MainText heading>ID: {id}</MainText>
                    {idsToRetrieve.has(id) && <CheckIcon className='ml-2 size-5' />}
                  </Box>
                </Box>
              ))}
            </Box>
            {!!amountToRetrieve && (
              <Button onClick={handleCTA} className='mt-6'>
                <MainText heading>
                  RETRIEVE {amountToRetrieve} ITEM{amountToRetrieve > 1 ? 'S' : ''}
                </MainText>
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Container>
  )
}
