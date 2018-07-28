import * as React from 'react';
import { hydrate } from 'react-dom';
import App from '../components/app/App';

const app = document.getElementById('app');
hydrate(<App />, app);
