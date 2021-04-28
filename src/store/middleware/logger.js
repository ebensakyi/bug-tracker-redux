const logger =param=> (state) => (next) => (action) => {
  console.log("Param ",param);
  console.log("State", state);
  console.log("next", next);
  console.log("action", action.type);
  next(action)
};

export default logger