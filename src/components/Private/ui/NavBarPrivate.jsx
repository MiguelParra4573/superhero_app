import React from 'react'
import { useDispatch } from "react-redux"
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from "../../../action/auth"


const NavBarPrivate = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <nav>
            <Link className="navbar-brand" to='/'> Home </Link>

            <div>
                <div>
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
            
            <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
            >
                Logout
            </button>

        </nav>
    )
}

export default NavBarPrivate