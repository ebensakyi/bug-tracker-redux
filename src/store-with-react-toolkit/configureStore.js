/* eslint-disable import/no-anonymous-default-export */
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import toast from "./middleware/toast"
import reducer from "./reducers";

export default function () {
  return configureStore({ reducer, middleware: [...getDefaultMiddleware(), logger("We are logging to console"),toast] });
}
