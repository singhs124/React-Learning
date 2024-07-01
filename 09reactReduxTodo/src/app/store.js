import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // Ensure this path is correct

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});
