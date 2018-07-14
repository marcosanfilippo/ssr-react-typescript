import { Request, Response } from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../components/app/App';
import { getData } from '../../services/server/welcome'; // or use import * as NAME and then NAME.myFunction()

const getWelcome = (req: Request, res: Response) => {
  const content = getData();
  const welcomeTitle = 'Welcome!';
  content.then(data => {
    res.status(200).send(renderToString(<App title={welcomeTitle} />));
  });
};

export { getWelcome };
