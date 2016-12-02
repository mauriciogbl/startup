import { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVE, INITIALIZE} from '../actions/actions';

const moviesState = JSON.parse(localStorage.getItem('moviesLocalStorage')) || []
function moviesApp(state = {moviesState}, action) {
  switch (action.type) {

    case ADD_MOVIE:
      state.moviesState.push(action.movies);
      localStorage.setItem("moviesLocalStorage", JSON.stringify(state.moviesState));
      return state.moviesState;

    case EDIT_MOVIE:
      state.moviesState[action.indexMovieSelected] = action.movies;
      localStorage.setItem("moviesLocalStorage", JSON.stringify(state.moviesState));
      return state.moviesState;

    case DELETE_MOVE:
      state.moviesState.splice(action.indexMovieSelected, 1);
      localStorage.setItem("moviesLocalStorage", JSON.stringify(state.moviesState));
      return state.moviesState;
      
    default:
    return state;
  }
}
export default moviesApp
