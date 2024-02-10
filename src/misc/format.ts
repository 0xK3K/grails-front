export const shortenAddress = (address: string, length: number = 4) =>
  `${address.slice(0, length + 2)}...${address.slice(-length)}`

export const shortenTxHash = (hash: string) => `${hash.slice(0, 10)}...${hash.slice(-8)}`
