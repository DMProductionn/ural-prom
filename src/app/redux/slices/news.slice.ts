import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { INews } from '../../types/news.type.'

export interface newsState {
  news: INews
}

const initialState: newsState = {
  news : {
    id: 0,
    name: '',
    title: '',
    text: '',
    img: '',
    created_at: 0
  }
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews>) => {
      state.news = action.payload
    }
  },
})

export const { setNews } = newsSlice.actions

export default newsSlice.reducer