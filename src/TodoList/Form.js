import React from "react";
import { TodoContext } from "./TodoContext";
import { actions } from "./actions";

export default class Form extends React.PureComponent {
  static contextType = TodoContext;

  state = {
    text: ""
  };

  render() {
    const { text } = this.state;
    const { dispatch } = this.context;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(actions.add(text));
          this.setState({ text: "" });
        }}
      >
        <input
          value={text}
          onChange={e => this.setState({ text: e.target.value })}
        />
      </form>
    );
  }
}
