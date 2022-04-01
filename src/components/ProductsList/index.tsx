import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Grocery, GroceryStatus } from '@components/ProductsList/Product/types'
import { Product } from '@components/ProductsList/Product'
import { Filters } from '@components/ProductsList/Filters'
import { RootState } from '@store/index'
import { changeProducts } from '@store/slices'
import { ProductCard } from '@components/ProductsList/ProductCard'

import { EmptyListTitle, Title, Wrapper } from './elements'

export const ProductsList = () => {
  const dispatch = useDispatch()

  const activeFilter = useSelector((state: RootState) => state.app.filter)
  const itemsList = useSelector((state: RootState) => state.app.products)

  const items = useMemo(() => {
    let preparedItems = [...itemsList]

    switch (activeFilter) {
      case 'have':
        preparedItems = preparedItems.filter(item => item.status === GroceryStatus.HAVE)
        break
      case 'run out':
        preparedItems = preparedItems.filter(item => item.status === GroceryStatus.RUN_OUT)
        break
    }

    return preparedItems.sort((a, b) => {
      if (a.priority === b.priority) {
        return b.name > a.name ? -1 : 1
      }

      return a.priority > b.priority ? 1 : -1
    })
  }, [itemsList, activeFilter])

  useEffect(() => {
    window.localStorage.setItem('products', JSON.stringify(itemsList))
  }, [itemsList])

  useEffect(() => {
    window.localStorage.setItem('filter', activeFilter)
  }, [activeFilter])

  const deleteHandler = (id: Grocery['id']) => {
    dispatch(changeProducts(itemsList.filter(item => item.id !== id)))
  }

  const changeHandler = (product: Grocery) => {
    dispatch(changeProducts(itemsList.map(item => (item.id === product.id ? product : item))))
  }

  const addNewProduct = (product: Grocery) => {
    const maxId = itemsList.reduce((acc, cur) => (cur.id > acc ? cur.id : acc), 0)

    dispatch(changeProducts([...itemsList, { ...product, id: maxId + 1 }]))
  }

  return (
    <>
      <Wrapper>
        <Title>Grocery List</Title>
        <Filters />
        {items.length > 0 ? (
          items.map(item => (
            <Product
              {...item}
              key={item.id}
              deleteHandler={deleteHandler}
              changeHandler={changeHandler}
            />
          ))
        ) : (
          <EmptyListTitle>¯\_(ツ)_/¯</EmptyListTitle>
        )}
        <ProductCard saveHandler={addNewProduct} />
      </Wrapper>
    </>
  )
}
