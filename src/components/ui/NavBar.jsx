import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav>
            <Link className="navbar-brand"> Home </Link>

            <div>
                <div>
                    <NavLink
                    
                    >
                        
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>
            
            <div>
                <ul>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>                
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
