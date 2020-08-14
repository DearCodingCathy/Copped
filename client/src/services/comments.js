import api from './api-helper';

export const createComment = async (user_id, post_id, data) => {
  const resp = await api.post(`/users/${user_id}/posts/${post_id}/comments`, { comment: data });
  return resp.data;
}

export const readAllComment = async (user_id, post_id) => {
  const resp = await api.get(`/users/${user_id}/posts/${post_id}/comments`);
  return resp.data;
}

export const readOneComment = async (user_id, post_id, id) => {
  const resp = await api.get(`/users/${user_id}/posts/${post_id}/comments/${id}`);
  return resp.data
}

export const updateComment = async (user_id, post_id, id, data) => {
  const resp = await api.put(`/users/${user_id}/posts/${post_id}/comments/${id}`, { comment: data });
  return resp.data
}

export const destroyComment = async (user_id, post_id, id) => {
  const resp = await api.delete(`/users/${user_id}/posts/${post_id}/comments/${id}`);
  return resp;
}