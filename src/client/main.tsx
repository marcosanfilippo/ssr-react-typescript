import * as React from 'react';
import { hydrate } from 'react-dom';
import App from '../components/App';

const app = document.getElementById('app');
hydrate(<App />, app);
