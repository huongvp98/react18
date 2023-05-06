import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "stores/store";

// Define a type for the slice state
export interface CounterState {
  value: number;
  max?: number;
  loading: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  max: null,
  loading: false,
};

// First, create the thunk
export const getMax = createAsyncThunk(
  "getmax",
  async (thunkAPI): Promise<number> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(100);
      }, 2000);
    });
    // return data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setMaxToZero: (state) => {
      state.max = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMax.fulfilled, (state, action) => {
      state.loading = false;
      state.max = action.payload;
      //if createAsyncThunk callback don't return promise number payload has unknow type
    });
    builder.addCase(getMax.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMax.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { increment, decrement, incrementByAmount, setMaxToZero } =
  counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
