import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import useFetchNews from '../hooks/use-fetch-news'
import { fetchLatestNews } from '../store/latest-news/latest-news-actions'
import Spinner from '../components/ui/Spinner'
import NewsList from '../components/news/NewsList'
import ScrollTrigger from '../components/features/ScrollTrigger'
import Searchbar from '../components/features/Searchbar'
import SortBy from '../components/features/SortBy'

const LatestNews = () => {
     const history = useHistory()
     const location = useLocation()

     const params = new URLSearchParams(location.search)
     const query = params.get('q')
     const propName = query ? query : 'news'

     const latestNews = useSelector(state => state.latestNews.latestNews[propName]?.articles) || []
     const currentPage = useSelector(state => state.latestNews.latestNews[propName]?.currentPage) || 1
     const totalResults = useSelector(state => state.latestNews.latestNews[propName]?.totalResults)
     const recentSortBy = useSelector(state => state.latestNews.recentSortBy)

     const [searchWord, setSearchWord] = useState('')
     const [sortBy, setSortBy] = useState(recentSortBy)
     const { length: newsLength } = latestNews

     const { loading, nextPageLoading, error, fetchNews } = useFetchNews()

     useEffect(() => {
          if(newsLength > 0) return

          if(!query) {
               fetchNews(fetchLatestNews, { type: 'latest', sortBy, currentPage: 1 })
          } else {
               fetchNews(
                    fetchLatestNews, 
                    { type: 'search', sortBy, currentPage: 1, searchWord: query }
               )
          }
     }, [fetchNews, query, newsLength, sortBy])

     const fetchSpecificNewsHandler = useCallback(() => {
          if(!query) {
               fetchNews(
                    fetchLatestNews, 
                    { type: 'latest', sortBy, currentPage: currentPage + 1 }
               )
          } else {
               fetchNews(
                    fetchLatestNews, 
                    { type: 'search', sortBy, currentPage: currentPage + 1, searchWord: query }
               )
          }
     }, [currentPage, fetchNews, query, sortBy])

     const searchHandler = () => {
          if(!searchWord.trim()) return
          history.push(`/search?q=${searchWord.trim()}`)
     }

     return (
          <div className="mcw">
               <div className='container'>
                    <Searchbar 
                         searchWord={searchWord} 
                         onChange={(e) => setSearchWord(e.target.value)} 
                         search={searchHandler}
                    />

                    <div className="sort-section">
                         <h3 className="label" style={{ margin: '0' }}>Latest</h3>

                         <SortBy sortBy={sortBy} changeSortBy={(e) => setSortBy(e.target.value)} />
                    </div>

                    {loading && <Spinner />}

                    {error && (
                         <div className="error">
                              <p>{error}</p>
                         </div>
                    )}

                    {!loading && !error && latestNews.length === 0 && (
                         <div className="not-found">
                              <p>No results found.</p>
                         </div>
                    )}

                    {!loading && !error && latestNews.length > 0 && (
                         <div className="main-content">
                              <NewsList newsArr={latestNews} />

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

export default LatestNews