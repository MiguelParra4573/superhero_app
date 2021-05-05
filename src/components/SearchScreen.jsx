import React from 'react'

const SearchScreen = () => {
    return (
        <div>
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
            </div>
            
        </div>
    )
}

export default SearchScreen
