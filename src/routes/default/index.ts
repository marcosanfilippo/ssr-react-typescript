import { Request, Response } from 'express';

const NOT_FOUND = 404;

const buildNotFoundBody = () => {
  const html = 'NOT FOUND';
  return html;
};

const getDefault = (_: Request, res: Response) => {
  res.status(NOT_FOUND).send(buildNotFoundBody());
};

export { getDefault };
