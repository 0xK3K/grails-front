import { Chain } from '@starknet-react/chains'

export const getContracts = (chain: Chain) =>
  ({
    mainnet: {
      eth: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
      grails: '0x2a819b93cc69b45ee5d1a1bfc16954c16f6d35c3873a06c97b95c009bfe502b',
      mint: '0x6f5b2f4f89542a80ccef4089db49b34bf25086e1f93dc09cf6a7c68498dccc4'
    },
    goerli: {
      eth: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
      grails: '0x42b03ae37c7a9fb79e21664d9372b632a683c878b020b72aa5af6bbebac2121',
      mint: '0x39068aceca95b44312152ab5fd079ddc1d2fc87b22ad753ea2230f938adfcdd'
    }
  })[chain.network]
