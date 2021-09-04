import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { latestNewsActions } from '../store/latest-news/latest-news-slice'

const useScrollTrigger = (currentPage, totalResults, propName) => {
     const dispatch = useDispatch()

     const scrollTrigger = useCallback(() => {
          const pageCount = Math.ceil(totalResults / 20)
          const scrollTriggerElement = document.getElementById('scroll-trigger')

          const observer = new IntersectionObserver(entries => {
               entries.forEach(entry => {
                    if(entry.intersectionRatio > 0 && currentPage < pageCount && currentPage < 5) {
                         dispatch(latestNewsActions.setCurrentPage({ propName, currentPage: currentPage + 1 }))
                    }
               })
          })

          if(!scrollTriggerElement) return

          observer.observe(scrollTriggerElement)
     }, [currentPage, totalResults, propName, dispatch])

     return {
          scrollTrigger
     }
}

export default useScrollTrigger