// in TS should be an enum
const actionNames = {
  add: "add",
  toggleStatus: "toggleStatus",
  reset: "reset"
};

export const todos = {
  actions: actionNames
};

export const actions = {
  add: text => ({
    text,
    type: todos.actions.add
  }),
  reset: () => ({
    type: todos.actions.reset
  }),
  toggleStatus: i => ({
    type: todos.actions.toggleStatus,
    i
  })
};
