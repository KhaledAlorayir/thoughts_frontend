const intial = {
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  profile: null,
};

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
        profile: null,
      };

    case "SET_USER_PROFILE":
      return { ...state, profile: action.payload };

    default:
      return state;
  }
};
