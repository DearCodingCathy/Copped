import api from './api-helper';

export const createComment = async (data) => {
  const resp = await api.post('/comments', { comment: data });
  return resp.data;
}

export const readAllComment = async () => {
  const resp = await api.get('/comments');
  return resp.data;
}

export const readOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data
}

export const updateComment = async (id, data) => {
  const resp = await api.put(`/comments/${id}`, { comment: data });
  return resp.data
}

export const destroyComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp;
}