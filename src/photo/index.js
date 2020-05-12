import { Router } from 'express';
import photoControler from './controler.js'

const photoRouter = new Router();

//роути 
photoRouter.get('/:countOfLikes', photoControler.getByCountOfLikes);

export default photoRouter;