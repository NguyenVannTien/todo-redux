
const initState = {
  filter:{
    search:'',
    status: 'All',
    priority:[]
  },
  todolist:[
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
  ]
}

const rootReducer = (state = initState, action) => {

  /*hach code
    {
      type: 'todoList/addTodo',
      payload:{id: 5, name: 'nvtien', completed: false, priority: 'Medium'}
    }
  */

  switch (action.type) {
    case 'todoList/addTodo':
      return {
        ...state,
        todolist:[
          ...state.todolist,
          {id: 4, name: 'nvtien', completed: false, priority: 'Medium'}
        ]
      }
      
    default:
      return state;
  }

} 

export default rootReducer;