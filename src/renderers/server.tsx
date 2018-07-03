// import * as React from 'react';
// import * as ReactDomServer from 'react-dom/server';
import axios from 'axios';
// import StateApi from '../state-api/lib';
import config from '../config/server';

const { host, port } = config;

export default async () => {
  const response = await axios.get(`http://${host}:${port}/data`);
  // const store = new StateApi(response.data);
  return {
    // initialMarkup: ReactDomServer.renderToString(),
    serverData: response.data
  };
};
