import { NavLink } from 'react-router-dom'

const Sidebar = () => {
     return (
          <div className="msb" id="msb">
               <nav className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                         <div className="brand-wrapper">
                              <div className="brand-name-wrapper">
                              {/* eslint-disable-next-line */}
                                   <a className="navbar-brand" href="#">
                                        News Corner
                                   </a>
                              </div>
                         </div>
                    </div>

                    <div className="side-menu-container">
                         <ul className="nav navbar-nav">
                              <li>
                                   <NavLink 
                                        to="/" 
                                        activeClassName="router-link-active" 
                                        isActive={(match, location) => {
                                             return match || location.pathname.includes('search')
                                        }} 
                                        exact
                                   >
                                        Home
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink to="/world?q=us" activeClassName="router-link-active">
                                        World
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink to="/category/business" activeClassName="router-link-active">
                                        Business
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink to="/category/entertainment" activeClassName="router-link-active">
                                        Entertainment
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink to="/category/general" activeClassName="router-link-active">
                                        General
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink to="/category/health" activeClassName="router-link-active">
                                        Health
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink to="/category/science" activeClassName="router-link-active">
                                        Science
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink to="/category/sports" activeClassName="router-link-active">
                                        Sports
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink to="/category/technology" activeClassName="router-link-active">
                                        Technology
                                   </NavLink>
                              </li>
                         </ul>
                    </div>
               </nav>  
          </div>
     )
}

export default Sidebar