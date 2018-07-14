import { Request, Response } from 'express';

const getDefault = (req: Request, res: Response) => {
  res.status(404).send('NOT FOUND');
};

export { getDefault };
