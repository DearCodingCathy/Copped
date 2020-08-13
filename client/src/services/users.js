import api from './api-helper';


export const readAllUser = async () => {
  const resp = await api.get('/users');
  return resp.data;
}

export const readOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data
}

export const updateUser = async (id, data) => {
  const resp = await api.put(`/users/${id}`, { user: data });
  return resp.data
}

export const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp;
}