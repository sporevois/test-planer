import axios from 'axios';

axios.defaults.baseURL = 'https://64d14437ff953154bb7a357e.mockapi.io/';

export const getEvents = async () => {
  const { data } = await axios.get('/events');
  return data;
};

export const getEventById = async id => {
  const { data } = await axios.get(`events/${id}`);
  return data;
};

export const postEvent = async body => {
  const { data } = await axios.post('/events', body);
  return data;
};

export const updateEvent = async (id, body) => {
  const { data } = await axios.put(`/events/${id}`, body);
  return data;
};

export const deleteEvent = async id => {
  const { data } = await axios.delete(`events/${id}`);
  return data;
};
