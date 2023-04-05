import { NextFunction, Request, Response } from 'express';

export const index = (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello, world!');
};
