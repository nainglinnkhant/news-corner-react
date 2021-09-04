import { useCallback, useRef } from 'react'
import SecondarySpinner from '../ui/SecondarySpinner'

const ScrollTrigger = ({ nextPageLoading, currentPage, totalResults, fetchSpecificNews }) => {
     const observer = useRef()

     const scrollTriggerRef = useCallback(node => {
          const pageCount = Math.ceil(totalResults / 20)

          if(observer.current) observer.current.disconnect()

          observer.current = new IntersectionObserver(entries => {
               if(entries[0].isIntersecting && currentPage < pageCount && currentPage < 5) {
                    fetchSpecificNews()
               }
          })

          if(node) observer.current.observe(node)
     }, [currentPage, totalResults, fetchSpecificNews])

     return (
          <div id="scroll-trigger" ref={scrollTriggerRef}>
               {nextPageLoading && <SecondarySpinner />}
          </div>
     )
}

export default ScrollTrigger