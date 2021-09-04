import { createSlice } from "@reduxjs/toolkit";
import { setNewsState } from "../../utils/utils";

const latestNewsSlice = createSlice({
     name: 'latest-news',
     initialState: { latestNews: {}, recentSortBy: 'publishedAt' },
     reducers: {
          setLatestNews(state, action) {
               setNewsState(state.latestNews, action.payload)
          },
          setRecentSortBy(state, action) {
               state.latestNews = {}
               state.recentSortBy = action.payload
          }
     }
})

export const latestNewsActions = latestNewsSlice.actions
export default latestNewsSlice.reducer