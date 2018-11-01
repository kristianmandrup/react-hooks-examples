import React from "react";
import { produce } from "immer";
import TodoView from "./TodoView";
import { TodoContext } from "./TodoContext";
// import { reset } from "ansi-colors";

// https://github.com/mweststrate/use-immer/blob/master/index.js
function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState);
}

function createReducers(todos, action) {
  return {
    add(list = todos, text = action.text) {
      list.unshift({ text: action.text, complete: false });
      return;
    },
    toggleStatus(list = todos, index = action.i) {
      list[action.i].complete = !todos[action.i].complete;
      return;
    },
    reset() {
      return [];
    }
  };
}

const todosReducer = (todos, action) => {
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
