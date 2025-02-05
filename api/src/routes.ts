
import { Routes } from '@scloud/lambda-api/dist/types';
import { ping } from './routes/ping';
import { auth } from './routes/auth';

const routes: Routes = {
  '/api/ping': { GET: ping },
  '/auth': { GET: auth },
};

export default routes;
