import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';
import ClassController from './controllers/ClassController';
import StudentController from './controllers/StudentController';
import ActivityController from './controllers/ActivityController';
import StudentActivityController from './controllers/StudentActivityController';

import authMiddleware from './middlewares/auth';
import multer from 'multer';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/session', SessionController.store);

// routes.use(authMiddleware);

routes.post('/users', UserController.store);

routes.post('/classes', ClassController.store);

routes.post('/students', StudentController.store);

routes.get('/activities/:class_id', ActivityController.index);
routes.post('/activities', upload.single('file'), ActivityController.store);

routes.get('/student-activities/:student', StudentActivityController.index);
routes.post('/student-activities', upload.single('file'), StudentActivityController.store);

export default routes;
