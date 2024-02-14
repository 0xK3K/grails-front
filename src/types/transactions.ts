export enum TransactionType {
  Retrieve = 'RETRIEVE',
  Store = 'STORE'
}

export type Transaction = {
  action: TransactionType
  hash: string
}
