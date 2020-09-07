import api from './api-helper';

export const readOneUser = async (user_id) => {
  const resp = await api.get(`/users/${user_id}`);
  return resp.data
}

export const updateUser = async (user_id,data) => {
  const resp = await api.put(`/users/${user_id}`, { user: data });
  return resp.data
}

export const destroyUser = async (user_id) => {
  const resp = await api.delete(`/users/${user_id}`);
  return resp;
}