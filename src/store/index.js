import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";

// const reducer = combineReducers({
//     pockemon: productReducer
//   });
const store = createStore(rootReducer, applyMiddleware(reduxThunk));
// const store = createStore(rootReducer);

export default store;
