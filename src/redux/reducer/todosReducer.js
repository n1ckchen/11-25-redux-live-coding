const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "TODO_ADDED":
      return [...state, action.payload];

    default:
      return state;
  }
}

export const addTodo = (payload) => {
  return { type: "TODO_ADDED", payload };
};