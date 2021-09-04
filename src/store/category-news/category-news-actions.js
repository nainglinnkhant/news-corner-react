import { sendRequest } from '../../utils/utils'
import { categoryNewsActions } from '../category-news/category-news-slice'

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchCategoryNews = (payload) => {
     return async (dispatch) => {
          const { currentPage, category } = payload

          let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${currentPage}&apiKey=${API_KEY}`
          
          const responseData = await sendRequest(url)

          const { articles, totalResults } = responseData

          dispatch(categoryNewsActions.setCategoryNews({
               propName: category,
               currentPage,
               totalResults,
               articles
          }))
     }
}