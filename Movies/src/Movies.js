import React from 'react'
import { Link } from "react-router-dom"
import { useGlobalContext } from './context'


const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"


const Movies = () => {

    const { movies, loading } = useGlobalContext()

    if(loading) {
        return <div className="loading"></div>
    }

    return (
        <section className="section movies-section">
            {
                movies.map(movie => {
                    const { Poster, Title, Year, imdbID: id } = movie
                    return (
                        <Link to={`/movies/${id}`} key={id}>
                            <article className="movie-container">
                                <img src={Poster === "N/A" ? defaultImage : Poster} alt={Title} className="movie" />
                                <div className="movie-info">
                                    <h4 className="movie-title">{Title}</h4>
                                    <p className="movie-year">{Year}</p>
                                </div>
                            </article>
                        </Link>
                    )
                })
            }
        </section>
    )

}


export default Movies
