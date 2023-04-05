import { NextFunction, Request, Response } from 'express';

export const entry = (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello, world!');
};
