import { NextFunction, Request, Response } from 'express';
import HttpStatus from 'http-status';

// Middleware for handling 404 Not Found errors
const notFound = (req: Request, res: Response, next: NextFunction): void => {
  res.status(HttpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found!',
    error: `Cannot ${req.method} ${req.originalUrl}`, // Include the method and URL
  });
};

export default notFound;
