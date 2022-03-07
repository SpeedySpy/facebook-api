//import { prisma } from '@prisma/client';
import { Router} from 'express';
import * as postControllers from '../../controllers/postControllers';
import * as userControllers from '../../controllers/userControllers';
import * as profilesControllers from '../../controllers/ProfilesControllers';




const api = Router();

api.get('/:id/posts', postControllers.getListUsersPosts);
api.get('/:id/profile', userControllers.getUserProfile);
api.patch('/:id/profile', profilesControllers.updateProfiles);
api.delete('/:id', userControllers.DeleteUserById);


export default api;

