import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: localStorage.getItem('langName') || 'en',
  },
  reducers: {
    LangSelected: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { LangSelected } = counterSlice.actions

export default counterSlice.reducer