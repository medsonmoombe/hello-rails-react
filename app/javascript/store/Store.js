import { configureStore } from '@reduxjs/toolkit';
import GreetingsReducer from './GreetingsReducer';

const store = configureStore({
    reducer: {
      greetings: GreetingsReducer,
    },
});

export default store;
