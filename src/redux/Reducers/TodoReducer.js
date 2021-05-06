const initialState = {
  todos: [],
};

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      let updateTodo = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: updateTodo };
    case "DONE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };
          }
          return { ...todo };
        }),
      };
    default:
      return state;
  }
};
