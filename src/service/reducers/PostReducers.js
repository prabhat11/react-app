const PostReducers = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
     return state = state.concat(action.post);
     case "DELETE_POST":
     return state = state.filter((post) => post.id !== action.id);
    case "FETCH_POST":
      return action.posts;
    default:
      return state;
  }
}
export default PostReducers;
