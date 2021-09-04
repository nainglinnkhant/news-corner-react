import NewsItem from './NewsItem'

const NewsList = ({ newsArr }) => {
     return (
          <div className="row items-list">
               {newsArr.map((news, index) => (
                    <NewsItem key={index} news={news} />
               ))}
          </div>
     )
}

export default NewsList