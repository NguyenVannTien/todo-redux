
// action deafaul

// export const addTodoAction = (data) => {
//   type: 'todoList/addTodo',
//   payload:{id: 4, name: 'nvtien', completed: false, priority: 'Medium'},
// }

//Khi muốn thếm làm 1 việc gì đó vào một list
// action creators => function

export const addTodo = (data) =>{
  return{
    type: 'todoList/addTodo',
    payload: data
  }
}