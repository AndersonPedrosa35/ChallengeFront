import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': { 'token': '123' }
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