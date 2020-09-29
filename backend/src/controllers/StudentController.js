import { v4 as uuid } from 'uuid';

import db from '../database/connection';

class StudentController {
  async index(req, res) {
    return res.json({ ok: true });
  }

  async store(req, res) {
    const { registration, user_id, class: student_class } = req.body;

    const transaction = await db.transaction();

    try {
      await transaction('students').insert({
        id: `${uuid()}`,
        registration,
        user_id,
        class: student_class,
      });

      await transaction.commit();

      return res.status(201).send();
    } catch (err) {
      await transaction.rollback();

      return res.status(400).json({ error: 'Unexpected error while creating new student.' });
    }
  }
}

export default new StudentController();
