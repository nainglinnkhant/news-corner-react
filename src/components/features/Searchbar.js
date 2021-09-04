import styles from './Searchbar.module.css'

const Searchbar = ({ searchWord, onChange, search }) => {
     const submitHandler = (e) => {
          e.preventDefault()

          search()
     }

     return (
          <div className={`row ${styles['search-bar']}`}>
               <div className="col-12 col-sm-8 col-md-6">
                    <form onSubmit={submitHandler} className="input-group">
                         <input
                              type="text"
                              className="form-control"
                              placeholder="Search..."
                              value={searchWord}
                              onChange={onChange}
                         />

                         <span className="input-group-btn" onClick={search}>
                              <button className={`${styles['search-btn']} btn btn-default`} type="button">
                                   <i className="fas fa-search"></i>
                              </button>
                         </span>
                    </form>
               </div>
          </div>
     )
}

export default Searchbar