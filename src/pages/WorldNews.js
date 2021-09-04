import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import useFetchNews from '../hooks/use-fetch-news'
import { fetchWorldNews } from '../store/world-news/world-news-action'
import { capitilize, convertCountryCode, COUNTRY_CODES } from '../utils/utils'
import Spinner from '../components/ui/Spinner'
import NewsList from '../components/news/NewsList'
import ScrollTrigger from '../components/features/ScrollTrigger'
import Searchbar from '../components/features/Searchbar'

const WorldNews = () => {
     const location = useLocation()
     const history = useHistory()

     const params = new URLSearchParams(location.search)
     const country = params.get('q')

     const worldNews = useSelector(state => state.worldNews.worldNews[country]?.articles) || []
     const currentPage = useSelector(state => state.worldNews.worldNews[country]?.currentPage) || 1
     const totalResults = useSelector(state => state.worldNews.worldNews[country]?.totalResults)

     const [searchWord, setSearchWord] = useState('')
     const label = capitilize(COUNTRY_CODES[country][0])
     const { length: newsLength } = worldNews
     
     const { loading, nextPageLoading, error, fetchNews } = useFetchNews()

     useEffect(() => {
          if(newsLength > 0) return

          fetchNews(fetchWorldNews, { currentPage: 1, country })
     }, [fetchNews, newsLength, country])

     const fetchSpecificNewsHandler = useCallback(() => {
          fetchNews(fetchWorldNews, { currentPage: currentPage + 1, country })
     }, [currentPage, fetchNews, country])

     const searchHandler = () => {
          if(!searchWord.trim()) return

          const searchKey = convertCountryCode(searchWord.trim())
          history.push(`/world?q=${searchKey}`)
     }

     return (
          <div className="mcw">
               <div className="container">
                    <Searchbar
                         searchWord={searchWord} 
                         onChange={(e) => setSearchWord(e.target.value)} 
                         search={searchHandler}
                    />

                    <h3 className="label" style={{ margin: '0' }}>{label}</h3>

                    {loading && <Spinner />}

                    {error && (
                         <div className="error">
                              <p>{error}</p>
                         </div>
                    )}

                    {!loading && !error && worldNews.length === 0 && (
                         <div className="not-found">
                              <p>No results found.</p>
                         </div>
                    )}

                    {!loading && !error && worldNews.length > 0 && (
                         <div className="main-content">
                              <NewsList newsArr={worldNews} />

                              <ScrollTrigger
                                   nextPageLoading={nextPageLoading} 
                                   currentPage={currentPage}
                                   totalResults={totalResults}
                                   fetchSpecificNews={fetchSpecificNewsHandler}
                              />
                         </div>
                    )}
               </div>
          </div>
     )
}

export default WorldNews