import { configureStore } from '@reduxjs/toolkit'
import LangSelected from './LangSlice'

export default configureStore({
  reducer: {
    MyRedux: LangSelected
  },
})