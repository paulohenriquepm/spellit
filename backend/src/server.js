import express from 'express';
import cors from 'cors';

import uploadConfig from './config/upload';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder))
app.use(routes);

app.listen(3333);
