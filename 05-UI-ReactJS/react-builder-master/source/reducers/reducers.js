import { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVE} from '../actions/actions';

const moviesState = JSON.parse(localStorage.getItem('moviesLocalStorage')) || []
function moviesApp(state = {moviesState}, action) {
  switch (action.type) {

    case ADD_MOVIE:
      state.moviesState.push(action.movies);
      localStorage.setItem("moviesLocalStorage", JSON.stringify(state.moviesState));
      return state;

    case EDIT_MOVIE:
      state.moviesState[action.indexMovieSelected] = action.movie;
      localStorage.setItem("moviesLocalStorage", JSON.stringify(state.moviesState));
      return state;

    case DELETE_MOVE:
      state.moviesState.splice(action.indexMovieSelected, 1);
      localStorage.setItem("moviesLocalStorage", JSON.stringify(state.moviesState));
      return state;

    default:
    return state;
  }
}
export default moviesApp
