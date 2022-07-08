

//redux toolkit

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: 'todoList',
  initialState: [
    {
      id: 1,
      name:'NgTien',
      completed: false,
      priority: 'Medium',
    },
    {
      id: 2,
      name:'Tien2',
      completed: true,
      priority:'High',
    },
    {
      id: 3,
      name:'tien19',
      completed: false,
      priority:'Low',
    },
  ],
  reducers:{
    addTodo: (state, action)=>{
      state.push(action.payload)
    },
    toggleTodoStatus: (state, action) =>{
      const currentTodo = state.find(todo => todo.id === action.payload);
      if(currentTodo){
        currentTodo.completed = !currentTodo.completed;
      }
    }
  }
})