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

    const user = await axios.get("/api/auth", {
      headers: { Authorization: `Bearer ${data.token}` },
    });

    if (user?.msg) {
      dispatch({
        type: "SET_ALERT",
        payload: { type: "err", msg: user.msg },
      });
      dispatch({ type: "CLEAR_USER_LOADING" });
      return;
    }

    dispatch({
      type: "SET_USER_TOKEN",
      payload: { token: data.token, user: user.data },
    });

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

    const user = await axios.get("/api/auth", {
      headers: { Authorization: `Bearer ${data.token}` },
    });

    if (user?.msg) {
      dispatch({ type: "SET_ALERT", payload: { type: "err", msg: user.msg } });
      dispatch({ type: "CLEAR_USER_LOADING" });
      return;
    }

    dispatch({
      type: "SET_USER_TOKEN",
      payload: { token: data.token, user: user.data },
    });
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

export const AutoLogin = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_USER_LOADING" });

    const auth = JSON.parse(localStorage.getItem("thoughts_token"));

    if (!auth) {
      dispatch({ type: "CLEAR_USER_LOADING" });
      dispatch({ type: "CLEAR_USER_TOKEN" });
      return;
    }

    const user = await axios.get("/api/auth", {
      headers: { Authorization: `Bearer ${auth.token}` },
    });

    if (user?.msg) {
      dispatch({
        type: "SET_ALERT",
        payload: { type: "err", msg: user.msg },
      });
      dispatch({ type: "CLEAR_USER_LOADING" });
      return;
    }

    dispatch({
      type: "SET_USER_TOKEN",
      payload: { token: auth.token, user: user.data },
    });
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

export const Logout = () => {
  return { type: "CLEAR_USER_TOKEN" };
};
