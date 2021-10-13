import React from 'react'
import { useParams, Link } from "react-router-dom"
import useFetch from './useFetch'


const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"


const MovieInfo = () => {

    const { id } = useParams()
    const { loading, error, data: movie } = useFetch(`&i=${id}`)

    
    if(loading) {
        return <div className="loading"></div>
    }

    if(error.show) {
        return (
            <div className="page-error">
                <h2>{error.message}</h2>
                <Link to="/" className="button">Back To Movies</Link>
            </div>
        )
    }

    const { Poster, Title, Plot, Year, Actors } = movie

    return (
        <main className="main-section movie-info-section">
            <article className="movie-info-image">
                <img src={Poster === "N/A" ? defaultImage : Poster} alt={Title} />
            </article>
            <article className="movie-info-details">
                <h2 className="movie-info-title">{Title} ({Year})</h2>
                <p className="movie-plot">{Plot}</p>
                <p className="movie-actors">{Actors}</p>
                <Link to="/" className="button">Back To Movies</Link>
            </article>
        </main>
    )

}


export default MovieInfo
