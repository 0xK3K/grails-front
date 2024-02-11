import { Chain } from '@starknet-react/chains'

export const getContracts = (chain: Chain) =>
  ({
    mainnet: {
      eth: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
      grails: '0x0',
      mint: '0x0'
    },
    goerli: {
      eth: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
      grails: '0x42b03ae37c7a9fb79e21664d9372b632a683c878b020b72aa5af6bbebac2121',
      mint: '0x39068aceca95b44312152ab5fd079ddc1d2fc87b22ad753ea2230f938adfcdd'
    }
  })[chain.network]
