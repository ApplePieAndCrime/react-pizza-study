import { combineReducers } from "redux";
import filters from "./filters";
import pizzas from "./pizzas";

const reducer = combineReducers({
  filters,
  pizzas,
});

export default reducer;
