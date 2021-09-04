import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import useFetchNews from '../hooks/use-fetch-news'
import { fetchCategoryNews } from '../store/category-news/category-news-actions'
import { capitilize } from '../utils/utils'
import Spinner from '../components/ui/Spinner'
import NewsList from '../components/news/NewsList'
import ScrollTrigger from '../components/features/ScrollTrigger'

const CategoryNews = () => {
     const params = useParams()
     const category = params.category

     const categoryNews = useSelector(state => state.categoryNews.categoryNews[category]?.articles) || []
     const currentPage = useSelector(state => state.categoryNews.categoryNews[category]?.currentPage) || 1
     const totalResults = useSelector(state => state.categoryNews.categoryNews[category]?.totalResults)

     const { length: newsLength } = categoryNews

     const { loading, nextPageLoading, error, fetchNews } = useFetchNews()

     useEffect(() => {
          if(newsLength > 0) return

          fetchNews(fetchCategoryNews, { currentPage: 1, category })
     }, [fetchNews, newsLength, category])

     const fetchSpecificNewsHandler = useCallback(() => {
          fetchNews(fetchCategoryNews, { currentPage: currentPage + 1, category })
     }, [currentPage, fetchNews, category])
     
     return (
          <div className="mcw">
               <div className="container">
                    <h3 className="label">{capitilize(category)}</h3>

                    {loading && <Spinner />}

                    {error && (
                         <div className="error">
                              <p>{error}</p>
                         </div>
                    )}

                    {!loading && !error && (
                         <div className="main-content">
                              <NewsList newsArr={categoryNews} />

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

export default CategoryNews