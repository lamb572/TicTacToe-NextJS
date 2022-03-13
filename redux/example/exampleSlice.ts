import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ExampleState = {
  value: number
}

const initialState: ExampleState = {
  value: 0,
}

export const exampleSlice = createSlice({
  name: "example",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = exampleSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.exampleState.value

const exampleReducer = exampleSlice.reducer
export default exampleReducer
