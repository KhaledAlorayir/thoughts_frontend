const intial = { isLoading: false, isAuth: false, token: null, user: null };

export const user = (state = intial, action) => {
  switch (action.type) {
    case "SET_USER_LOADING":
      return { ...state, isLoading: true };
    case "CLEAR_USER_LOADING":
      return { ...state, isLoading: false };

    case "SET_USER_TOKEN":
      localStorage.setItem(
        "thoughts_token",
        JSON.stringify({ token: action.payload.token })
      );
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        user: action.payload.user,
      };

    case "CLEAR_USER_TOKEN":
      localStorage.removeItem("thoughts_token");
      return {
        ...state,
        isAuth: false,
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
