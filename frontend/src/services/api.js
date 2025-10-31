import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api',
});

export function getPosts() {
  return api.get('/posts');
}

export function createPost(data) {
  return api.post('/posts', data);
}

export function getEvents() {
  return api.get('/events');
}

export function createEvent(data) {
  return api.post('/events', data);
}

export function signup(user) {
  return api.post('/users/signup', user);
}

export function login(user) {
  return api.post('/users/login', user);
}
