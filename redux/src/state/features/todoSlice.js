import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo =  {
                id: Date.now(),
                title: action.payload,
            }
            state.push(newTodo);
        },
        removeTodo: (state, action) => {
           return state.filter((user) => user.id !== action.payload)
        },
        editTodo: (state, action) => {
            const { id, newTitle } = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
                todo.title = newTitle;
            }
            
        },
    }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
