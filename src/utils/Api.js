import axios from 'axios';
import { getStorage } from './localStorage';


const token = getStorage('user').token;
const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token
  }
});

export async function getLeads() {
  return api.get('/leads').then((response) => response.data).catch((err) => console.error(err));
}

export async function getEmployees() {
  return api.get('/employees').then((response) => response.data).catch((err) => console.error(err));
}

export async function getQuotes() {
  return api.get('/quotes').then((response) => response.data).catch((err) => console.error(err));
}

export async function createQuote(body) {
  return api.post('/quotes', body).then((response) => response.data).catch((err) => console.error(err));
}