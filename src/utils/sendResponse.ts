import { Response } from 'express';

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  messagw: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.messagw,
    data: data.data,
  });
};