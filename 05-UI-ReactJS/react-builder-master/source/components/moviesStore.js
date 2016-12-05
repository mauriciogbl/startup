import moviesApp from '../reducers/reducers';
import { createStore } from 'redux'

let moviesStore = createStore(moviesApp);
export default moviesStore;
