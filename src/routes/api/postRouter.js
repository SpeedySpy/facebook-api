import { Router} from 'express';
import * as postControllers from '../../controllers/postControllers';




const router = Router();
router.post('/posts/', postControllers.createPost);
router.get('/:id', postControllers.returnPost);
router.get('/', postControllers.ReturnAllUsersPost);
router.patch('/:id', postControllers.updatePosts); 
router.delete('/:id', postControllers.DeletePost);

export default router; 
