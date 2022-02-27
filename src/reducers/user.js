const intial = { isLoading: false, isAuth: false, token: null };

export const user = (state = intial, action) => {
  switch (action.type) {
    case "SET_USER_LOADING":
      return { ...state, isLoading: true };
    case "CLEAR_USER_LOADING":
      return { ...state, isLoading: false };

    case "SET_USER_TOKEN":
      localStorage.setItem("thoughts_token", { token: action.payload });
      return { ...state, isAuth: true, token: action.payload };

    default:
      return state;
  }
};
