import axios from "axios";

export const Register = (Formdata) => async (dispatch) => {
  try {
    dispatch({ type: "SET_USER_LOADING" });
    const { data } = await axios.post("/api/auth/register", Formdata);

    if (data?.msg) {
      dispatch({ type: "SET_ALERT", payload: { type: "err", msg: data.msg } });
      dispatch({ type: "CLEAR_USER_LOADING" });
      return;
    }

    dispatch({ type: "SET_USER_TOKEN", payload: data.token });
    dispatch({ type: "CLEAR_USER_LOADING" });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "SET_ALERT",
      payload: { type: "err", msg: error.message },
    });
    dispatch({ type: "CLEAR_USER_LOADING" });
  }
};

export const Login = (Formdata) => async (dispatch) => {
  try {
    dispatch({ type: "SET_USER_LOADING" });
    const { data } = await axios.post("/api/auth/login", Formdata);

    if (data?.msg) {
      dispatch({ type: "SET_ALERT", payload: { type: "err", msg: data.msg } });
      dispatch({ type: "CLEAR_USER_LOADING" });
      return;
    }

    dispatch({ type: "SET_USER_TOKEN", payload: data.token });
    dispatch({ type: "CLEAR_USER_LOADING" });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "SET_ALERT",
      payload: { type: "err", msg: error.message },
    });
    dispatch({ type: "CLEAR_USER_LOADING" });
  }
};

export const AutoLogin = () => async () => {
  //loading handling
  //alert compo
  //expires never
};
