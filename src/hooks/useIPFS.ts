import { useEffect, useRef } from 'react'
import { useQueries } from '@tanstack/react-query'
import { Metadata } from '@/types/app'

const useIPFSBaseUrl = () => {
  return 'https://nftstorage.link/ipfs/bafybeiaudpv2a7k7rny3rfiy5ueidu32zcobgfor7t5b32jkykvdgpgdh4/'
}

const useIPFS = <TQueryFnData = unknown>({
  suffixes,
  retry = true,
  handleErrorResponse,
  staleTime = 0
}: {
  suffixes: Array<string>
  refetchInterval?: number
  handleErrorResponse?: (response: Response) => TQueryFnData
  retry?: boolean | number
  staleTime?: number
}) => {
  const baseUrl = useIPFSBaseUrl()
  const urls = suffixes.map((suffix) => `${baseUrl}${suffix}`)

  const ref = useRef(urls)

  useEffect(() => {
    ref.current = urls
  }, [urls])

  return useQueries({
    queries: urls.map((url) => ({
      async queryFn() {
        if (ref.current !== urls) throw new Error('Canceled request')

        const response = await fetch(url)
        if (!response.ok) {
          if (handleErrorResponse) {
            return handleErrorResponse(response)
          }
          throw new Error(`Failed to fetch from API: ${response.status}`)
        }
        return response.json()
      },
      retry,
      queryKey: [url],
      staleTime,
      enabled: Boolean(baseUrl && suffixes.length)
    }))
  })
}

export const useMetadata = (ids: Array<number>) => {
  return useIPFS<Array<Metadata>>({
    suffixes: ids.map((id) => `${id}.json`)
  })
}
