import React from 'react'
// import PropTypes from 'prop-types'
import NavBarPrivate from "./ui/NavBarPrivate"
import FooterPrivate from "./ui/FooterPrivate"

const HeroScreen = () => {
    return (
        <div>
            <NavBarPrivate />
            
            <h1>Aqui los detalles del heroe</h1>
            {/* TODO: Detalles del heroe */}

            <FooterPrivate/>
        </div>
    )
}

// HeroScreen.propTypes = {

// }

export default HeroScreen
