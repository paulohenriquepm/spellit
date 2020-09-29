import { v4 as uuid } from 'uuid';

import FileController from '../controllers/FileController';

import db from '../database/connection';

class ActivityController {
  async index(req, res) {
    return res.json({ ok: true });
  }

  async store(req, res) {
    const { name, delivery_date, points, obs, class: class_id } = req.body;
    const { file } = req;

    const filename = await FileController.store(file.filename);

    const transaction = await db.transaction();

    try {
      await transaction('activities').insert({
        id: `${uuid()}`,
        name,
        delivery_date,
        points,
        obs,
        file: filename,
        class: class_id
      });

      await transaction.commit();

      return res.status(201).send();
    } catch (err) {
      await transaction.rollback();

      return res.status(400).json({ error: 'Unexpected error while creating new activity.' });
    }
  }
}

export default new ActivityController();
