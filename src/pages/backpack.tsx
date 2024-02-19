import { Box, CheckIcon, Container, MainText } from '@/components/Layout'
import { useDispatch } from '@/hooks'
import { abis, getContracts, metadata, serializeAddress, serializeBoolean, serializeU256, toast } from '@/misc'
import { addPendingTransaction } from '@/store/appSlice'
import { TransactionType } from '@/types'
import { Button, Spinner } from '@nextui-org/react'
import { useAccount, useContractRead, useContractWrite, useNetwork } from '@starknet-react/core'
import Image from 'next/image'
import { useCallback, useMemo, useState } from 'react'
import { Call, num } from 'starknet'

export default function Backpack() {
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const dispatch = useDispatch()

  const [idsToStore, setIdsToStore] = useState<Set<number>>(new Set())

  const { data: isApprovedForAll } = useContractRead({
    address: getContracts(chain)!.grails,
    abi: abis.grails,
    args: [serializeAddress(getContracts(chain)!.vault)],
    enabled: !!address,
    functionName: 'isApprovedForAll'
  })

  const { data: owned, isLoading } = useContractRead({
    address: getContracts(chain)!.grails,
    abi: abis.grails,
    args: address ? [serializeAddress(address)] : [],
    enabled: !!address,
    functionName: 'owned'
  })

  const ids = useMemo(() => (owned as Array<bigint>)?.map((id) => Number(id.toString())) || [], [owned])
  const items = useMemo(() => {
    const items = ids.map((id) => ({
      id,
      type: metadata[id - 1].type
    }))
    items.sort(({ id: a }, { id: b }) => a - b)
    return items
  }, [ids])
  const amountToStore = useMemo(() => [...idsToStore].length, [idsToStore])

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
        const setApprovalForAll: Call | null = !isApprovedForAll
          ? {
              contractAddress: contracts.grails,
              entrypoint: 'setApprovalForAll',
              calldata: [serializeAddress(contracts.vault), ...serializeBoolean(true)]
            }
          : null

        const store: Array<Call> = [...idsToStore].map((id) => ({
          contractAddress: contracts.vault,
          entrypoint: 'store',
          calldata: [...serializeU256(id.toString())]
        }))

        return [setApprovalForAll, ...store].filter((x): x is Call => x !== null)
      } catch (error) {
        console.error('Failed to generate call data', error)
      }
    }
  }, [address, chain, idsToStore, isApprovedForAll])

  const { writeAsync } = useContractWrite({ calls })

  const handleCTA = useCallback(async () => {
    try {
      const { transaction_hash: hash } = await writeAsync()
      toast({ action: TransactionType.Store, chain, transactionHash: hash, type: 'info' })
      dispatch(addPendingTransaction({ action: TransactionType.Store, hash: num.toStorageKey(hash) }))
    } catch (e) {}
  }, [chain, dispatch, writeAsync])

  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='my-20'>
        <MainText heading className='text-3xl'>
          backpack
        </MainText>
      </Box>
      <Box center>
        {!isConnected ? (
          <MainText heading>welcome, adventurer, connect your wallet to see the content of your backpack</MainText>
        ) : isLoading ? (
          <Spinner color='white' className='mt-12' />
        ) : !ids.length ? (
          <MainText heading>your inventory is empty...</MainText>
        ) : (
          <Box col center>
            <Box center className={`mx-auto max-w-[1200px] flex-wrap`}>
              {items.map(({ id, type }, index) => (
                <Box
                  onClick={() => {
                    if (idsToStore.has(id)) {
                      setIdsToStore((state) => new Set([...state].filter((item) => item !== id)))
                    } else {
                      setIdsToStore((state) => new Set([...state, id]))
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
                    {idsToStore.has(id) && <CheckIcon className='ml-2 size-5' />}
                  </Box>
                </Box>
              ))}
            </Box>
            {!!amountToStore && (
              <Button onClick={handleCTA} className='mt-6'>
                <MainText heading>
                  STORE {amountToStore} ITEM{amountToStore > 1 ? 'S' : ''}
                </MainText>
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Container>
  )
}
