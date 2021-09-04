import { configureStore } from '@reduxjs/toolkit'
import latestNewsReducer from './latest-news/latest-news-slice'
import worldNewsReducer from './world-news/world-news-slice'
import categoryNewsReducer from './category-news/category-news-slice'

const store = configureStore({
     reducer: {
          latestNews: latestNewsReducer,
          worldNews: worldNewsReducer,
          categoryNews: categoryNewsReducer
     }
})

export default store