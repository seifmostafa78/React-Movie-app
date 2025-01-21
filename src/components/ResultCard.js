import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

const ResultCard = ({movie}) => {

  const {watchlist, watched, MoviesDispatch} = useContext(GlobalContext)

  const storedMovies =  watchlist.find((o) => o.imdbID === movie.imdbID);
  const storedWatchedMovies = watched.find((o) => o.imdbID === movie.imdbID); 

  const watchlistDisabled = storedMovies? true : storedWatchedMovies? true : false
  const watchedDisabled  = storedWatchedMovies? true : false

  return (
    <div className='result-card'>
        <div className='poster-wrapper'>
            {movie.Poster? <img src={movie.Poster} alt={movie.Title}/>
             : <div className='filter-poster'></div>}
        </div>
        <div className='info'>
            <div className='header'>
                <h3 className='title'>{movie.Title}</h3>
                {movie.Year? <h4 className='release-date'>{movie.Year}</h4> : "-"}
            </div>
            <div className='controls'>
                <button className='btn'
                onClick={() => MoviesDispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})}
                disabled={watchlistDisabled}
                >
                    Add to Watchlist
                </button>
                <button className='btn'
                onClick={() => MoviesDispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie})}
                disabled={watchedDisabled}
                >
                    Add to Watched
                </button>
            </div>
        </div>
    </div>
  )
}

export default ResultCard
