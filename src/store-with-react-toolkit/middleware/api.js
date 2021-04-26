import axios from "axios";
const api = ({ dispatch }) => (next) => async (action) => {
  console.log("Action ", action);
  if (action.type !== "apiCallBegan") return next(action);
  next(action);
  const { url, method, data, onSuccess, onError } = action.payload;
  try {
    let response = await axios.request({
      baseURL: "http://localhost:3001",
      url,
      method,
      data,
    });

    dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: onError, payload: error.message });
  }
};

export default api;
