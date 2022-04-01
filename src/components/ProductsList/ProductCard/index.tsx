import React, { useState } from 'react'

import { Button } from '@components/Button'
import { GroceryStatus } from '@components/ProductsList/Product/types'

import { ProductCardProps } from './types'
import { Wrapper, StyledInput, SetStatusWrapper, SetPriorityWrapper } from './elements'

export const ProductCard = ({ saveHandler, product }: ProductCardProps) => {
  const [name, setName] = useState(product?.name || '')
  const [status, setStatus] = useState<GroceryStatus>(GroceryStatus.HAVE)
  const [priority, setPriority] = useState(1)

  const saveButtonClickHandler = () => {
    saveHandler({ id: product?.id || 0, name, status, priority })
    setName('')
  }

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const changeStatusButtonHandler = (status: GroceryStatus) => () => {
    setStatus(status)
  }

  const changePriorityButtonHandler = (priority: number) => () => {
    setPriority(priority)
  }

  return (
    <Wrapper>
      <StyledInput placeholder="Product name" value={name} onChange={inputChangeHandler} />
      <SetStatusWrapper>
        <Button
          onClick={changeStatusButtonHandler(GroceryStatus.HAVE)}
          color={status === GroceryStatus.HAVE ? 'ORANGE' : 'TRANSPARENT_BLACK_40'}
        >
          Have
        </Button>
        <Button
          onClick={changeStatusButtonHandler(GroceryStatus.RUN_OUT)}
          color={status === GroceryStatus.RUN_OUT ? 'ORANGE' : 'TRANSPARENT_BLACK_40'}
        >
          Run Out
        </Button>
      </SetStatusWrapper>
      <SetPriorityWrapper>
        {[1, 2, 3, 4, 5].map(i => (
          <Button
            onClick={changePriorityButtonHandler(i)}
            color={priority === i ? 'ORANGE' : 'TRANSPARENT_BLACK_40'}
            key={i}
          >
            {i}
          </Button>
        ))}
      </SetPriorityWrapper>
      <Button onClick={saveButtonClickHandler} disabled={name.length < 1} fullWidth>
        Save
      </Button>
    </Wrapper>
  )
}
