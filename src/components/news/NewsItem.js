import { useEffect, useState } from 'react'
import { getViewWidth, trimDescription } from '../../utils/utils'
import styles from './NewsItem.module.css'

const NewsItem = ({ news }) => {
     const [viewWidth, setViewWidth] = useState(getViewWidth())

     const newsImage = news.urlToImage ? news.urlToImage : 'https://i.stack.imgur.com/y9DpT.jpg'

     const trimmedDes = trimDescription(news.title.length, news.description, viewWidth)

     const resizeHandler = () => {
          setViewWidth(getViewWidth)
     }

     useEffect(() => {
          window.addEventListener('resize', resizeHandler)

          return () => {
               window.removeEventListener('resize', resizeHandler)
          }
     })

     return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
               <a 
                    className={styles['news-item']}
                    href={news.url}
                    target="_blank"
                    rel="noreferrer"
               >
                    <div className="news-img">
                         <object data={newsImage} type="image/jpg" className={styles['img-responsive']} >
                              <img
                                   src="https://i.stack.imgur.com/y9DpT.jpg"
                                   alt={news.title}
                                   className={styles['img-responsive']}
                              />
                         </object>
                    </div>

                    <div className={styles['news-info']}>
                         <h2 className={styles['news-title']}>{news.title}</h2>

                         <p className={styles['news-description']}>{trimmedDes}</p>
                    </div>
               </a>
          </div>
     )
}

export default NewsItem