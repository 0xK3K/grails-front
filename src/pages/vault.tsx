import { Box, CheckIcon, Container, MainText } from '@/components/Layout'
import { useDispatch, useMetadata } from '@/hooks'
import { abis, getContracts, serializeAddress, serializeU256, toast } from '@/misc'
import { addPendingTransaction } from '@/store/appSlice'
import { TransactionType } from '@/types'
import { Metadata } from '@/types/app'
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
  const metadata = useMetadata(ids)
  const items: Array<Metadata> = useMemo(() => {
    const items = metadata.map(({ data }) => data)
    items.sort(({ id: a }, { id: b }) => a - b)
    return items
  }, [metadata])
  const amountToRetrieve = useMemo(() => [...idsToRetrieve].length, [idsToRetrieve])

  const colors = (rarity: string) => {
    switch (rarity) {
      case 'Mythical':
        return { border: 'border-red-500', text: 'text-red-500' }
      case 'Legendary':
        return { border: 'border-orange-500', text: 'text-orange-500' }
      case 'Epic':
        return { border: 'border-purple-500', text: 'text-purple-500' }
      case 'Rare':
        return { border: 'border-blue-500', text: 'text-blue-500' }
      case 'Uncommon':
        return { border: 'border-green-500', text: 'text-green-500' }
      default:
        return { border: 'border-white', text: 'text-white' }
    }
  }

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
            <Box center className={`mx-auto grid max-w-[1200px] grid-cols-2`}>
              {items.map(({ id, name, image, attributes }, index) => (
                <Box
                  onClick={() => {
                    if (idsToRetrieve.has(id)) {
                      setIdsToRetrieve((state) => new Set([...state].filter((item) => item !== id)))
                    } else {
                      setIdsToRetrieve((state) => new Set([...state, id]))
                    }
                  }}
                  key={index}
                  className='relative mx-5 my-3 cursor-pointer'
                >
                  <Image
                    src={image.replace(/^ipfs:\/\/(.+)/, 'https://ipfs.io/ipfs/$1')}
                    alt=''
                    width={200}
                    height={200}
                    className={`rounded-xl border-1 ${colors(attributes[1].value).border}`}
                  />
                  <Box col className='ml-3'>
                    <Box>
                      <MainText heading className={colors(attributes[1].value).text}>
                        {name.toUpperCase()}
                      </MainText>
                      <Box center>{idsToRetrieve.has(id) && <CheckIcon className='ml-2 size-5' />}</Box>
                    </Box>
                    <Box>
                      <MainText heading>ID: {id}</MainText>
                    </Box>
                    {attributes[0].value !== 'Character' && (
                      <Box>
                        <MainText heading>Rarity: {attributes[1].value}</MainText>
                      </Box>
                    )}
                    {attributes
                      .slice(2)
                      .filter(({ trait_type }) => attributes[0].value !== 'Character' || trait_type !== 'Class')
                      .map(({ trait_type, value }) => (
                        <Box>
                          <MainText heading>
                            {trait_type}: {value}
                          </MainText>
                        </Box>
                      ))}
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
