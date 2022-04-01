export interface Grocery {
  id: number
  name: string
  status: GroceryStatus
  priority: number
}

export enum GroceryStatus {
  RUN_OUT = 'run out',
  HAVE = 'have',
}

export interface ProductProps extends Grocery {
  deleteHandler: (id: Grocery['id']) => void
  changeHandler: (product: Grocery) => void
}
