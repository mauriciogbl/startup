const ADD_MOVIE = 'ADD_MOVIE';
const EDIT_MOVIE = 'EDIT_MOVIE';
const DELETE_MOVE = 'DELETE_MOVE';

export function addMovie(movie) {
  return { type: ADD_MOVIE, movies: movie };
}

export function editMovie(movie, idx) {
  return { type: EDIT_MOVIE, movie: movie, indexMovieSelected: idx};
}

export function deleteMovie(index) {
  return { type: DELETE_MOVE, indexMovieSelected: index };
}
export {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVE}
