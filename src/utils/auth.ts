import { NAME_TOKEN } from 'constants/localStorage';

const Index = {
  getToken() {
    return localStorage.getItem(NAME_TOKEN) || '';
  },
  removeToken() {
    localStorage.removeItem(NAME_TOKEN);
  },
  setToken(token: string) {
    localStorage.setItem(NAME_TOKEN, token);
  },
  clearLocalStorage() {
    localStorage.removeItem(NAME_TOKEN);
  },
};

export default Index;
