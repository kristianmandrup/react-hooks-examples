import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { actions } from "./actions";

export default () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <div>
      {todos.map(({ text, complete }, i) => (
        <div
          key={text}
          onClick={() => dispatch(actions.toggleStatus(i))}
          style={{
            textDecoration: complete ? "line-through" : ""
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};
