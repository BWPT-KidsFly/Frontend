import axios from 'axios'
export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token')

  return axios.create({
    baseURL: 'https://bw-kids-fly.herokuapp.com/api',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  })
};
