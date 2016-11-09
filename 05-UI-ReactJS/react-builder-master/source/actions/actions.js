export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVE = 'DELETE_MOVE';
export const INITIALIZE = 'INITIALIZE';

export function addMovie(movie) {
  return { type: ADD_MOVIE, movies: movie }
}

export function editMovie(movie, idx) {
  return { type: EDIT_MOVIE, movies: movie, indexMovieSelected: idx}
}

export function deleteMovie(index) {
  return { type: DELETE_MOVE, indexMovieSelected: index }
}
export function initialize() {
  return { type: INITIALIZE }
}
