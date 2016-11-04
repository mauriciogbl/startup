export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVE = 'DELETE_MOVE';
export const INITIALIZE = 'INITIALIZE';

export function addMovie(movie) {
  return { type: ADD_MOVIE, movies: movie }
}

export function editMovie(index, title, year, duration) {
  return { type: EDIT_MOVIE, indexMovie: index, titleNew: title, yearNew: year, durationNew: duration}
}

export function deleteMovie() {
  return { type: DELETE_MOVE }
}
export function initialize() {
  return { type: INITIALIZE }
}
