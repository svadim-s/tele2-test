import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../../../common/models/IProduct";
import { fetchProducts } from "../services/fetchProducts";

export interface ProductState {
  products: IProduct[]
  isLoading: boolean
  error: string | undefined;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: undefined,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<{ products: IProduct[] }>) =>  {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      })
  }
})

export default productSlice.reducer;
