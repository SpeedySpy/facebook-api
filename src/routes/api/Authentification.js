import { Router} from 'express';
import * as AuthentificationControllers from '../../controllers/authentificationControllers';



const authentication = Router();
authentication.post('/login',AuthentificationControllers.login);
authentication.post('/register',AuthentificationControllers.register);


export default authentication;
