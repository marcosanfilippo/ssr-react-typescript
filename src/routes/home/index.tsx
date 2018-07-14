import { Request, Response } from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../components/app/App';

const getHome = (req: Request, res: Response) => {
  const defaultTitle = 'Home!';
  res.status(200).send(renderToString(<App title={defaultTitle} />));
};

export { getHome };
