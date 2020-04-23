import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid-193.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': '4adf7d7978msh86b257ad53e1824p119c30jsn0f3adb590986',
  },
});

export default api;
