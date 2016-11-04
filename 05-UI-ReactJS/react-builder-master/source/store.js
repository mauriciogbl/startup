import moviesApp from './reducers.js';
import { createStore } from 'redux';

let moviesStore = createStore(moviesApp);
export default moviesStore
