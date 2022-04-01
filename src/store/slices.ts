import { createSlice } from '@reduxjs/toolkit'

import { Filter } from '@components/ProductsList/Filters/types'
import { Grocery } from '@components/ProductsList/Product/types'

export interface AppState {
  filter: Filter
  products: Grocery[]
}

const initialState: AppState = {
  filter: 'all',
  products: [],
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload
    },
    changeProducts: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { changeFilter, changeProducts } = appSlice.actions
export const appReducer = appSlice.reducer
