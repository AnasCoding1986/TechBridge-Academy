import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { studentRoutes } from './modules/student/student.router'
import { UserRoutes } from './modules/user/user.router'
import { error } from 'console'
import { any } from 'zod'
import globalErrorFn from './middlewire/globalErrorHandler'
import notFound from './middlewire/notFound'
import router from './routes'


const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1', router)

const getAController = (req:Request, res:Response) => {
  res.send('Hello World!')
}

app.get('/', getAController)

app.use(globalErrorFn);
app.use(notFound);

export default app

