import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    payload: {
      name: "NFT Name",
    },
  },
}

export const ModalInfo = createSlice({
  name: 'modalInfo',
  initialState,
  reducers: {
    setData: (state, data) => {
      state.value = data
    },
  },
})

export const { setData } = ModalInfo.actions

export default ModalInfo.reducer

