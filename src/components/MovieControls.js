import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export const MovieControls = ({ movie, type }) => {

    const {MoviesDispatch} = useContext(GlobalContext)

    return (
      <div className='inner-card-controls'>
        {type === 'watchlist' &&
          <>
            <button
              className="ctrl-btn"
              onClick={() => MoviesDispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie})}
            >
              <i class="fa-regular fa-eye"></i>
            </button>
            <button
              className="ctrl-btn"
              onClick={() => MoviesDispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: movie.imdbID})}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </>
        }
        {
          type === 'watched' &&
          <>
            <button
              className='ctrl-btn'
              onClick={() => MoviesDispatch({type: "MOVE_TO_WATCHLIST", payload: movie})}
            >
              <i class="fa-regular fa-eye-slash"></i>
            </button>
            <button
              className='ctrl-btn'
              onClick={() => MoviesDispatch({type: "REMOVE_FROM_WATCHED", payload: movie.imdbID})}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </>
        }
      </div>
    )
  }
