import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { actions } from "./actions";

export default () => {
  const { dispatch } = useContext(TodoContext);

  return <button onClick={() => dispatch(actions.reset())}>reset</button>;
};
