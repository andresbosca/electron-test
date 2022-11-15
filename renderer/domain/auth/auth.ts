import axios from 'axios';

interface Auth {
  register: (username: string, email: string, password: string) => Promise<any>;
  login: (username: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
  getCurrentUser: () => any;
}

const API_URL = 'http://localhost:8888/api/auth/';

const register = (username: string, email: string, password: string) => {
  return axios.post(API_URL + 'signup', {
    username,
    email,
    password,
  });
};

const login = async (username: string, password: string) => {
  const response = await axios.post(API_URL + 'signin', {
    username,
    password,
  });
  if (response.data.username) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  localStorage.removeItem('user');
  const response = await axios.post(API_URL + 'signout');
  return response.data;
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const AuthService: Auth = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
