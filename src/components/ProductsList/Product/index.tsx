import React, { useState } from 'react'

import { Button } from '@components/Button'
import { ProductCard } from '@components/ProductsList/ProductCard'

import { ProductProps, GroceryStatus, Grocery } from './types'
import {
  IndicatorsWrapper,
  Priority,
  Status,
  Wrapper,
  Name,
  ElementWrapper,
  CardsWrapper,
} from './elements'

export const Product = ({
  id,
  name,
  status,
  priority,
  deleteHandler,
  changeHandler,
}: ProductProps) => {
  const [isEditCardOpen, setIsEditCardOpen] = useState(false)

  const deleteButtonClickHandler = () => {
    deleteHandler(id)
  }

  const elementClickHandler = () => {
    setIsEditCardOpen(!isEditCardOpen)
  }

  const saveButtonHandler = (product: Grocery) => {
    changeHandler(product)
    setIsEditCardOpen(false)
  }

  return (
    <Wrapper>
      <CardsWrapper>
        <ElementWrapper onClick={elementClickHandler}>
          <Name>{name}</Name>
          <IndicatorsWrapper>
            <Status isActive={status === GroceryStatus.HAVE}>{status}</Status>
            <Priority priority={priority}>{priority}</Priority>
          </IndicatorsWrapper>
        </ElementWrapper>
        {isEditCardOpen && (
          <ProductCard saveHandler={saveButtonHandler} product={{ id, name, status, priority }} />
        )}
      </CardsWrapper>
      <Button onClick={deleteButtonClickHandler}>Delete</Button>
    </Wrapper>
  )
}
