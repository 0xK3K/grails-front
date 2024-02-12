import { Box, Container, MainText } from '@/components/Layout'
import { useDispatch } from '@/hooks'
import { addPendingTransaction } from '@/store/appSlice'
import { abis, formatEther, getContracts, serializeAddress, serializeU256, toast } from '@/misc'
import { TransactionType } from '@/types'
import { Button } from '@nextui-org/react'
import { useAccount, useContractRead, useContractWrite, useNetwork } from '@starknet-react/core'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Call, num } from 'starknet'

export default function Mint() {
  const { address, isConnected } = useAccount()
  const dispatch = useDispatch()
  const { chain } = useNetwork()

  const [number, setNumber] = useState(0)

  const { data: balanceOf, isLoading } = useContractRead({
    address: getContracts(chain)!.grails,
    abi: abis.grails,
    args: [serializeAddress(getContracts(chain)!.mint)],
    enabled: !!address,
    functionName: 'balanceOf'
  })

  const remaining = useMemo(() => (balanceOf ? ((balanceOf as bigint) / BigInt(10 ** 18)).toString() : 0), [balanceOf])

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

  const calls = useMemo(() => {
    if (address) {
      const contracts = getContracts(chain)!

      try {
        const approve: Call = {
          contractAddress: contracts.eth,
          entrypoint: 'approve',
          calldata: [serializeAddress(contracts.mint), ...serializeU256(formatEther(0.01))]
        }

        const mint: Call = {
          contractAddress: contracts.mint,
          entrypoint: 'mint',
          calldata: []
        }

        return [approve, mint]
      } catch (error) {
        console.error('Failed to generate call data', error)
      }
    }
  }, [address, chain])

  const { writeAsync } = useContractWrite({ calls })

  const handleCTA = useCallback(async () => {
    try {
      const { transaction_hash: hash } = await writeAsync()
      toast({ action: TransactionType.Mint, chain, transactionHash: hash, type: 'info' })
      dispatch(addPendingTransaction({ action: TransactionType.Mint, hash: num.toStorageKey(hash) }))
    } catch (e) {}
  }, [chain, dispatch, writeAsync])

  return (
    <Container className='h-[100%] max-w-[1400px]'>
      <Box center className='min-h-[70vh]'>
        {!isConnected ? (
          <MainText heading>welcome, adventurer, connect your wallet to begin</MainText>
        ) : (
          <Box col center>
            <Box col center>
              <MainText heading>the initiation quest has begun</MainText>
              <MainText heading>each item requires a tithe of 0.01 ether,</MainText>
              <MainText heading>a token of thy reverence to the realm</MainText>
              {isLoading ? (
                <MainText heading>...</MainText>
              ) : (
                <MainText heading className='mt-6'>
                  there are 950 remaining items available
                </MainText>
              )}
            </Box>
            <Box className='anim-pulsate my-6'>
              <Image src={`/assets/${item}.png`} alt='item' width={80} height={80} />
            </Box>
            {Number(remaining?.toString() || 0) > 0 && (
              <Box center>
                <Button onClick={handleCTA}>
                  <MainText heading>mint 1 item</MainText>
                </Button>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Container>
  )
}
