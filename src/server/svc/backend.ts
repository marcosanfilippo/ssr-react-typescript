import axios, { AxiosPromise, AxiosResponse } from 'axios';

const getData: () => AxiosPromise = () =>
  axios
    .get(`https://randomuser.me/api/`)
    .then((response: AxiosResponse) => response.data)
    .catch(err => new Error(err));

export { getData };
