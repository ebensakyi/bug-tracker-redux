/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

import reducer from "./reducers";

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(), 
       api,
      logger("We are logging to console"),
      toast,
    
    ],
  });
}
