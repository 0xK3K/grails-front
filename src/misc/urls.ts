import { Chain } from '@starknet-react/chains'

export const explorerContractURL = (address: string | undefined, chain: Chain) =>
  (chain.testnet ? 'https://testnet.starkscan.co/' : 'https://starkscan.co/') + 'contract/' + address

export const explorerTransactionURL = (address: string, chain: Chain) =>
  (chain.testnet ? 'https://testnet.starkscan.co/' : 'https://starkscan.co/') + 'tx/' + address
