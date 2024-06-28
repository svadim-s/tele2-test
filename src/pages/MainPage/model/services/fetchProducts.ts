import axios from "axios";
import { IProduct } from "../../../../common/models/IProduct";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk<{ products: IProduct[] }, void, { rejectValue: string }>(
  'products/fetchAll',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
      const response = await axios.get<{ products: IProduct[] }>(`https://dummyjson.com/products?limit=0`)
      return response.data
    } catch (err) {
      return rejectWithValue('error')
    }
  }
)
