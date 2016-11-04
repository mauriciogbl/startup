import { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVE, INITIALIZE} from './actions'

function moviesApp(state = [{ moviesState: { } } ], action) {
  switch (action.type) {
    case INITIALIZE:
      state.moviesState = JSON.parse(localStorage.getItem("moviesLocalStorage")) || [];
      return state;
    case ADD_MOVIE:
      console.log(state.moviesState);
      state.moviesState.push(action.movies);
       localStorage.setItem("moviesLocalStorage", JSON.stringify(state.moviesState));
      return state.moviesState;
    case EDIT_MOVIE:
      console.log(state.moviesState[action.indexMovie]);

    case DELETE_MOVE:

    default:

  }
}
export default moviesApp
