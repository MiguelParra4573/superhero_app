import React from 'react'
import NavBarPrivate from "./ui/NavBarPrivate"
import FooterPrivate from "./ui/FooterPrivate"

const SearchScreen = () => {
    return (
        <div>
            <NavBarPrivate/>
            <div className="col-5">
                <h4> Search Form </h4>
                <hr />

                <form /* onSubmit={ handleSearch } */ >
                    <input 
                        type="text"
                        placeholder="Find your hero"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        // value={ searchText }
                        // onChange={ handleInputChange }
                        />

                    <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                    >
                        Search...
                    </button>

                </form>
                    {/* TODO: Diseño de la pantalla de busqueda de los heroes */}
                    

            </div>
            
            <FooterPrivate/>
        </div>
    )
}

export default SearchScreen
