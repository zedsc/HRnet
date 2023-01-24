import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./store";
import { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
