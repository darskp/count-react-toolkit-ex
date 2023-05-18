import {configureStore} from '@reduxjs/toolkit';
import reduce from './reduce';

let store=configureStore({
reducer:reduce
})

export default store;
