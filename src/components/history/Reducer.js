const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_HISTORY":
      const history = [...state.history, payload.history];
      return { history };

    default:
      return state;
  }
};

const addAction = (history) => {
  return {
    type: "ADD_HISTORY",
    payload: { history },
  };
};

module.exports = {
  historyReducer,
  addAction,
  initialState,
};
