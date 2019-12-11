import { createStore } from "redux";
import addresult from "../duck/reducers/redusersAddResult";
const store = createStore(
  addresult,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
