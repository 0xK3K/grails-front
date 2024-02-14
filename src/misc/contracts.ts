import { Chain } from '@starknet-react/chains'

export const getContracts = (chain: Chain) =>
  ({
    mainnet: {
      eth: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
      grails: '0x2a819b93cc69b45ee5d1a1bfc16954c16f6d35c3873a06c97b95c009bfe502b',
      vault: '0x9c8f75b75354193db06bd8e7bb1f23b2e8412ffe5482254fbccec8c2f2da2a'
    },
    goerli: {
      eth: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
      grails: '0xa71f26d3381afa4f5dbc504b43a553bbe1fad1a0ac889bb05685e28ec7075d',
      vault: '0x736c7b3a1dcc7d88631bc06a5de8dc4c030fb98eee2f68d30b68ce9a5672540'
    }
  })[chain.network]
