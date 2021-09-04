import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

const useFetchNews = () => {
     const dispatch = useDispatch()
     
     const [loading, setLoading] = useState(false)
     const [nextPageLoading, setNextPageLoading] = useState(false)
     const [error, setError] = useState(null)

     const fetchNews = useCallback(async (dispatchFunc, payload) => {
          setError(null)
          if(payload.currentPage === 1) setLoading(true)
          if(payload.currentPage > 1) setNextPageLoading(true)

          try {
               await dispatch(dispatchFunc(payload))
          } catch (error) {
               setError(error.message)
          }
          
          setLoading(false)
          setNextPageLoading(false)
     }, [dispatch])

     return {
          loading,
          nextPageLoading,
          error,
          fetchNews
     }
}

export default useFetchNews