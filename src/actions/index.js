import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export function useActions(actions, deps) {
  const dispatch = useDispatch();
  if (Array.isArray(actions)) {
    return actions.map((a) => bindActionCreators(a, dispatch));
  }
  return bindActionCreators(actions, dispatch);
}

export * from "./basket";
