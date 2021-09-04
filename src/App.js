import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Sidebar from './components/ui/Sidebar'
import LatestNews from './pages/LatestNews'
import WorldNews from './pages/WorldNews'
import CategoryNews from './pages/CategoryNews'

function App() {
     useEffect(() => {
          document.querySelector('#msbo').addEventListener('click', function() {
               document.querySelector('body').classList.toggle('msb-x')
          })
     })

     const moveTop = () => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
     }

     return (
          <>
               <Navbar />
               
               <Sidebar />

               <Switch>
                    <Route path='/' component={LatestNews} exact />
                    <Route path='/search' component={LatestNews} />
                    <Route path='/world' component={WorldNews} />
                    <Route path='/category/:category' component={CategoryNews} />
               </Switch>

               <div className="up-button">
                    <button onClick={moveTop}>
                         <i className="fas fa-arrow-up"></i>
                    </button>
               </div>
          </>
     )
}

export default App
