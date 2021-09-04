import { sendRequest } from '../../utils/utils'
import { latestNewsActions } from './latest-news-slice'

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchLatestNews = (payload) => {
     return async (dispatch) => {
          const { type, sortBy, currentPage, searchWord } = payload

          let url = `https://newsapi.org/v2/everything?domains=bbc.co.uk&language=en&sortBy=${sortBy}&page=${currentPage}&apiKey=${API_KEY}`

          if(type === 'search') {
               url = `https://newsapi.org/v2/everything?q=${searchWord}&qInTitle=${searchWord}&language=en&sortBy=${sortBy}&page=${currentPage}&apiKey=${API_KEY}`
          }
          
          const responseData = await sendRequest(url)

          const propName = type === 'search' ? searchWord : 'news'
          const { articles, totalResults } = responseData

          dispatch(latestNewsActions.setLatestNews({
               propName,
               currentPage,
               totalResults,
               articles
          }))
     }
}