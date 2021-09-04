import { createSlice } from "@reduxjs/toolkit";
import { setNewsState } from "../../utils/utils";

const worldNewsSlice = createSlice({
     name: 'world-news',
     initialState: { worldNews: {} },
     reducers: {
          setWorldNews(state, action) {
               setNewsState(state.worldNews, action.payload)
          }
     }
})

export const worldNewsActions = worldNewsSlice.actions
export default worldNewsSlice.reducer