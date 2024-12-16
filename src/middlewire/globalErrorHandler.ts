import { NextFunction, Request, Response } from 'express'
const globalErrorFn = (error: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500;
    const message = error.message || 'Something went wrong';
  
    res.status(statusCode).json({
      success: false,
      message,
      error, // Pass the full error object or filter it if needed
    });
  }

  export default globalErrorFn;