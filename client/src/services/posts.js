import api from './api-helper';

export const createPost = async (data) => {
  const resp = await api.post('/posts', { post: data });
  return resp.data;
}

export const readAllPost = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}

export const readOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data
}

export const updatePost = async (id, data) => {
  const resp = await api.put(`/posts/${id}`, { post: data });
  return resp.data
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
}