import { Router } from 'express';
import authentication from './Authentification';
import postRouter from './postRouter';
import userRoute from './userRoute';


const api = Router();

api.use('/authentication', authentication);
api.use('/postRouter', postRouter);
api.use('/userRoute', userRoute )

export default api;