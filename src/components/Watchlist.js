import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import MovieCard from "./MovieCard"

const Watchlist = () => {

  const {watchlist} = useContext(GlobalContext)

  return (
    <div className='watchlist'>
      <div className='container'>
        <div className='main-heading'>
          <h1>My Watchlist</h1>
          <span className='movies-count'>
            {watchlist.length}-
            {watchlist.length === 1? "Movie" : "Movies"}
          </span>
        </div>
        {watchlist.length > 0? <div className="movie-grid">
          {watchlist.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} type="watchlist"/>
          ))}
          </div> : <h2 className="no-movies">No Movies in your watchlist, add some !</h2>}
      </div>
    </div>
  )
}

export default Watchlist
