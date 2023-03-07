import { configureStore } from '@reduxjs/toolkit'
import ModalReducer from '../features/ModalSlice'
import ModalInfoReducer from '../features/ModalInfo'

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
    modalInfo: ModalInfoReducer,
  },
})