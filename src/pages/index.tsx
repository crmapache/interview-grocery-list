import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import type { NextPage } from 'next'
import Head from 'next/head'

import { ProductsList } from '@components/ProductsList'
import { Filter } from '@components/ProductsList/Filters/types'
import { GroceryStatus } from '@components/ProductsList/Product/types'
import { changeFilter, changeProducts } from '@store/slices'

import data from './data.json'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const [productsLoaded, setProductsLoaded] = useState(false)

  useEffect(() => {
    let products = JSON.parse(window.localStorage.getItem('products') || '[]')
    const filter: Filter = (window.localStorage.getItem('filter') as Filter) || 'all'

    if (products.length < 1) {
      products = [
        { id: 1, name: 'Bread', status: GroceryStatus.HAVE, priority: 1 },
        { id: 2, name: 'Oats', status: GroceryStatus.HAVE, priority: 4 },
        { id: 3, name: 'Corn', status: GroceryStatus.RUN_OUT, priority: 2 },
        { id: 4, name: 'Meat', status: GroceryStatus.HAVE, priority: 5 },
        { id: 5, name: 'Fish', status: GroceryStatus.RUN_OUT, priority: 3 },
        { id: 6, name: 'Cheese', status: GroceryStatus.RUN_OUT, priority: 2 },
        { id: 7, name: 'Papaya', status: GroceryStatus.HAVE, priority: 1 },
      ]
    }

    dispatch(changeProducts(products))
    dispatch(changeFilter(filter))
    setProductsLoaded(true)
  }, [])

  return (
    <div>
      <Head>
        <title>{data.index.title}</title>
        <meta name="description" content={data.index.description} />
        <meta name="keywords" content={data.index.keywords.join(' ')} />
      </Head>
      {productsLoaded && <ProductsList />}
    </div>
  )
}

export default Home
