import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import config from './config';
import { HttpError } from './utils';

// initialize app
const app = express();

// configure app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
// istanbul ignore next
if (config.env !== 'test') {
  app.use(morgan('common')); // logging deactivated in testing
}

// setup api routes
app.get('/status', (req: express.Request, res: express.Response) => {
  return res.send('OK');
});

app.all('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  return next(new HttpError(404, 'Path not found'));
});

// error handling
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- next is a required parameter for middleware
app.use((err: HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  return res.status(err.status).json({
    message: err.message,
    extra: err.extra,
  });
});

export default app;
