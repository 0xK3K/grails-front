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
      grails: '0x0',
      mint: '0x0'
    }
  })[chain.network]
