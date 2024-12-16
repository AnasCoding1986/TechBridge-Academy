import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { studentRoutes } from './modules/student/student.router'
import { UserRoutes } from './modules/user/user.router'
import { error } from 'console'
import { any } from 'zod'
const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users', UserRoutes);

const getAController = (req:Request, res:Response) => {
  res.send('Hello World!')
}

app.get('/', getAController)

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500;
  const message = error.message || 'Something went wrong';

  res.status(statusCode).json({
    success: false,
    message,
    error, // Pass the full error object or filter it if needed
  });
});

export default app

