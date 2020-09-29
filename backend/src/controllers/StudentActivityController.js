import { v4 as uuid } from 'uuid';

import FileController from '../controllers/FileController';

import db from '../database/connection';

class StudentActivityController {
  async index(req, res) {
    return res.json({ ok: true });
  }

  async store(req, res) {
    const { delivered_date, student, activity } = req.body;
    const { file } = req;

    const filename = await FileController.store(file.filename);

    const transaction = await db.transaction();

    try {
      await transaction('student_activities').insert({
        id: `${uuid()}`,
        delivered_date,
        student,
        activity,
        file: filename,
      });

      await transaction.commit();

      return res.status(201).send();
    } catch (err) {
      await transaction.rollback();

      return res.status(400).json({ error: 'Unexpected error while creating new student activity.' });
    }
  }
}

export default new StudentActivityController();
