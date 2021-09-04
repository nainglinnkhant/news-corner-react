import { sendRequest } from "../../utils/utils"
import { worldNewsActions } from "./world-news-slice"

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchWorldNews = (payload) => {
     return async (dispatch) => {
          const { currentPage, country } = payload

          let url = `https://newsapi.org/v2/top-headlines?country=${country}&language=en&page=${currentPage}&apiKey=${API_KEY}`
          
          const responseData = await sendRequest(url)

          const { articles, totalResults } = responseData

          dispatch(worldNewsActions.setWorldNews({
               propName: country,
               currentPage,
               totalResults,
               articles
          }))
     }
}