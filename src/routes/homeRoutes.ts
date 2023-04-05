import { Router } from 'express';
import { entry } from '../controllers/homeController';

const router = Router();

router.get('/home', entry);

export default router;
