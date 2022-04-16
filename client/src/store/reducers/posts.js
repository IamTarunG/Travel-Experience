import { FETCH, CREATE, DELETE, UPDATE } from "../../constants";
const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case DELETE:
      return state.filter((post) => {
        return post._id !== action.payload;
      });
    case UPDATE:
      return state.map((post) => {
        return post._id === action.payload._id ? action.payload : post;
      });
    default:
      return state;
  }
};

export default posts;
