import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"
import MovieCard from "./MovieCard"

const Watched = () => {

  const {watched} = useContext(GlobalContext)

  return (
    <div className='watched'>
      <div className='container'>
        <div className='main-heading'>
          <h1>My Watched</h1>
          <span className='movies-count'>
            {watched.length}- 
            {watched.length === 1? "Movie" : "Movies"}
          </span>
        </div>
        {watched.length > 0? <div className="movie-grid">
          {watched.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} type="watched"/>
          ))}
          </div> : <h2 className="no-movies">No Movies in your watched, add some !</h2>}
      </div>
    </div>
  )
}

export default Watched
