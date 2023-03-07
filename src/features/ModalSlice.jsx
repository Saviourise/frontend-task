import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.value = true
    },
    close: (state) => {
      state.value = false
    },
  },
})

export const { open, close } = ModalSlice.actions

export default ModalSlice.reducer

