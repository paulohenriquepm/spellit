import { v4 as uuid } from 'uuid';

import db from '../database/connection';

class ClassController {
  async index(req, res) {
    return res.json({ ok: true });
  }

  async store(req, res) {
    const { name, course, start_date, end_date, workload, limit, teacher } = req.body;

    const transaction = await db.transaction();

    try {
      await transaction('classes').insert({
        id: `${uuid()}`,
        name,
        course,
        start_date,
        end_date,
        workload,
        limit,
        teacher
      });

      await transaction.commit();

      return res.status(201).send();
    } catch (err) {
      await transaction.rollback();

      return res.status(400).json({ error: 'Unexpected error while creating new class.' });
    }
  }
}

export default new ClassController();
