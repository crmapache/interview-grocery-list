import { Grocery } from '@components/ProductsList/Product/types'

export interface ProductCardProps {
  saveHandler: (product: Grocery) => void
  product?: Grocery
}
