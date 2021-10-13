import React from 'react'
import { useGlobalContext } from './context'


const Search = () => {

    const { query, setQuery, error } = useGlobalContext()

    return (
        <section className="section search-section">
            <h2>Search Movies</h2>
            <form className="search-form" onSubmit={(e) => e.preventDefault()} >
                <input 
                    type="text" 
                    className="search-field" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            {
                error.show && <div className="error">{error.message}</div>
            }
            </form>
        </section>
    )

}


export default Search


