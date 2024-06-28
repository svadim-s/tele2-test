import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer, { productSlice } from '../pages/MainPage/model/slices/ProductSlice'

const rootReducer = combineReducers({
  [productSlice.name]: productReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']