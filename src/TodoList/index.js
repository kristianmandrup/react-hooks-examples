import React from "react";
import { produce } from "immer";
import TodoView from "./TodoView";
import { TodoContext } from "./TodoContext";
// import { reset } from "ansi-colors";

// https://github.com/mweststrate/use-immer/blob/master/index.js
function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

// allows testing of each reducer function :)
export function add({ list = [], text }) {
  list.unshift({ text: text, complete: false });
}

export function toggleStatus({ list = [], index }) {
  list[index].complete = !list[index].complete;
}

export function reset() {
  return [];
}

export function createReducers(todos, action) {
  return {
    add: () => add({ list: todos, text: action.text }),
    toggleStatus: () => toggleStatus({ list: todos, index: action.i }),
    reset: () => reset()
  };
}

export const todosReducer = (todos, action) => {
  const reducers = createReducers(todos, action);
  const reducer = reducers[action.type];
  return reducer() || todos;
};

export default () => {
  const [todos, dispatch] = useImmerReducer(todosReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <TodoView />
    </TodoContext.Provider>
  );
};
