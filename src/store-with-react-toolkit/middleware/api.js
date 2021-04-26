import { axios } from "axios";
const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== "apiCallBegun") return next(action);
  const { url, method, data, onSuccess, onError } = action.payload;
  try {
    let response = await axios.request({
      baseURL: "http://localhost:5000/bugs",
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
