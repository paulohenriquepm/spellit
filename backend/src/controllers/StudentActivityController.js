import { v4 as uuid } from 'uuid';

import FileController from '../controllers/FileController';

import db from '../database/connection';

class StudentActivityController {
  async index(req, res) {
    const { student } = req.params;

    const student_activities = await db('student_activities').where({
      student,
    }).join('activities', 'student_activities.activity', '=', 'activities.id');

    return res.json(student_activities);
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
