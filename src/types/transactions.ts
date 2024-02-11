export enum TransactionType {
  Mint = 'MINT'
}

export type Transaction = {
  action: TransactionType.Mint
  hash: string
}
