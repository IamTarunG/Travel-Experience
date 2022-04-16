import { getPost, createPost, deletePost, updatePost } from "../../api";
import { FETCH, CREATE, DELETE, UPDATE } from "../../constants";
const getPosts = () => async (dispatch) => {
  const { data } = await getPost();
  dispatch({ type: FETCH, payload: data });
};
const createPosts = (formData) => async (dispatch) => {
  const { data } = await createPost(formData);
  dispatch({ type: CREATE, payload: data });
};

const deletePosts = (id) => async (dispatch) => {
  await deletePost(id);
  dispatch({ type: DELETE, payload: id });
};
const updatePosts = (id, formData) => async (dispatch) => {
  const { data } = await updatePost(id, formData);
  dispatch({ type: UPDATE, payload: data });
};
export { getPosts, createPosts, deletePosts, updatePosts };
