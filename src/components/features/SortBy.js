import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { latestNewsActions } from '../../store/latest-news/latest-news-slice'
import styles from './SortBy.module.css'

let isInit = true

const SortBy = ({ sortBy, changeSortBy }) => {
     const dispatch = useDispatch()

     useEffect(() => {
          if(isInit) {
               isInit = false
               return
          }
          dispatch(latestNewsActions.setRecentSortBy(sortBy))
     }, [dispatch, sortBy])

     useEffect(() => {
          return () => {
               isInit = true
          }
     }, [])

     return (
          <div className={styles['sort-by']}>
               <label htmlFor="sortBy">Sort By:</label>

               <select name="sortBy" id="sortBy" value={sortBy} onChange={changeSortBy}>
                    <option value="publishedAt">Published at</option>
                    <option value="popularity">Popularity</option>
                    <option value="relevancy">Relevancy</option>
               </select>
          </div>
     )
}

export default SortBy