import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Filter } from './types'

import { Wrapper } from '@components/ProductsList/Filters/elements'
import { RootState } from '@store/index'
import { changeFilter } from '@store/slices'
import { Button } from '@components/Button'

export const Filters = () => {
  const activeFilter = useSelector((state: RootState) => state.app.filter)
  const dispatch = useDispatch()

  const filterButtonHandler = (value: Filter) => () => {
    dispatch(changeFilter(value))
  }

  return (
    <Wrapper>
      <Button
        color={activeFilter === 'run out' ? 'ORANGE' : 'TRANSPARENT_BLACK_40'}
        onClick={filterButtonHandler('run out')}
      >
        Run Out
      </Button>
      <Button
        color={activeFilter === 'have' ? 'ORANGE' : 'TRANSPARENT_BLACK_40'}
        onClick={filterButtonHandler('have')}
      >
        Have
      </Button>
      <Button
        color={activeFilter === 'all' ? 'ORANGE' : 'TRANSPARENT_BLACK_40'}
        onClick={filterButtonHandler('all')}
      >
        All
      </Button>
    </Wrapper>
  )
}
