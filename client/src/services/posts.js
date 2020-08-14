import api from './api-helper';

export const createPost = async (user_id, data) => {
  const resp = await api.post(`/users/${user_id}/posts`, { post: data });
  return resp.data;
}

export const readAllPost = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/posts`);
  return resp.data;
}

export const readOnePost = async (user_id, id) => {
  const resp = await api.get(`/users/${user_id}/posts/${id}`);
  return resp.data
}

export const updatePost = async (user_id, id, data) => {
  const resp = await api.put(`users/${user_id}/posts/${id}`, { post: data });
  return resp.data
}

export const destroyPost = async (user_id, id) => {
  const resp = await api.delete(`/users/${user_id}/posts/${id}`);
  return resp;
}

// To render all post regardless of user on AllPost screen.
export const getAllPost = async () => {
  const resp = await api.get(`/allpost`);
  return resp.data;
}
