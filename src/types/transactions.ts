export enum TransactionType {
  Mint = 'MINT'
}

export interface Mint {
  action: TransactionType.Mint
  strategyName: string
}

export type Transaction = Mint & {
  hash: string
  timestamp: number
}
