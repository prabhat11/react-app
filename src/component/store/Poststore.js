
import { createStore } from "redux";
import postReducers from "../../service/reducers/PostReducers";
let postStore = createStore(postReducers);
   
console.log(postStore)
export default postStore;
