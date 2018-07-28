import { Request, Response } from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import Html from '../../client/template/html';
import App from '../../components/app/App';
import { getData } from '../../services/server/welcome';

const htmlBody = renderToString(<App />);
const renderedHtml = Html({ body: htmlBody, title: '' });
const renderWelcome = (res: Response) => res.status(200).send(renderedHtml);

const getHome = (req: Request, res: Response) => {
  const content = getData();
  content.then(data => {
    renderWelcome(res);
  });
};
export { getHome };
