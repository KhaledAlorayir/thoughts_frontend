const inital = { isAlert: false, type: null, msg: null };

export const Alert = (state = inital, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        isAlert: true,
        type: action.payload.type,
        msg: action.payload.msg,
      };

    case "CLEAR_ALERT":
      return {
        ...state,
        isAlert: false,
        type: null,
        msg: null,
      };

    default:
      return state;
  }
};
