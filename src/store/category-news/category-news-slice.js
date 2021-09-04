import { createSlice } from "@reduxjs/toolkit";
import { setNewsState } from "../../utils/utils";

const categoryNewsSlice = createSlice({
     name: 'category-news',
     initialState: { categoryNews: {} },
     reducers: {
          setCategoryNews(state, action) {
               setNewsState(state.categoryNews, action.payload)
          }
     }
})

export const categoryNewsActions = categoryNewsSlice.actions
export default categoryNewsSlice.reducer