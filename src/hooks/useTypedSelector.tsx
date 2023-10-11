import { UseSelector } from "react-redux/es/hooks/useSelector"
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { useSelector } from "react-redux";

export const useTypedSelector:TypedUseSelectorHook<RootState>=useSelector;