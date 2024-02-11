import { ReactNode, useMemo } from 'react'
import { goerli, mainnet } from '@starknet-react/chains'
import { argent, braavos, Connector, jsonRpcProvider, StarknetConfig } from '@starknet-react/core'
import { constants } from 'starknet'
// @ts-expect-error package is here
import { ArgentMobileConnector } from 'starknetkit/argentMobile'

export default function StarknetConfigWrapper({ children }: { children: ReactNode }) {
  const { chains, provider, connectors } = useMemo(
    () => ({
      connectors: [
        braavos(),
        argent(),
        new ArgentMobileConnector({
          dappName: 'Grails',
          description: 'Web application for interacting with the Grails protocol',
          url: 'https://grails.build',
          chainId: constants.NetworkName.SN_MAIN
        })
      ] as Connector[],
      provider: jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id === mainnet.id) {
            return {
              chainId: constants.StarknetChainId.SN_MAIN,
              nodeUrl: 'https://starknet-mainnet.blastapi.io/cc0d991d-bd8f-45ac-89c3-823291e558b4/rpc/v0_6'
            }
          } else if (chain.id === goerli.id) {
            return {
              chainId: constants.StarknetChainId.SN_GOERLI,
              nodeUrl: 'https://starknet-testnet.blastapi.io/cc0d991d-bd8f-45ac-89c3-823291e558b4/rpc/v0_6'
            }
          }
          throw new Error(`Unrecognized chain ID: ${chain.id}`)
        }
      }),
      chains: [mainnet, goerli]
    }),
    []
  )

  return (
    <StarknetConfig chains={chains} provider={provider} connectors={connectors} autoConnect>
      {children}
    </StarknetConfig>
  )
}
