import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import employeeReducer from "./employee.slice";
import { loadState } from "./browser-storage";

const rootReducer = combineReducers({ employee: employeeReducer });

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: loadState(), //storing the previously persisted store
  middleware: (
    getDefaultMiddleware //disable check to avoid console errors with stardate
  ) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
