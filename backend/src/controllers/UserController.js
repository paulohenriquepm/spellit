import md5 from 'md5';
import { v4 as uuid } from 'uuid';

import db from '../database/connection';

class UserController {
  async index(req, res) {
    return res.json({ ok: true });
  }

  async store(req, res) {
    const { name, email, password, cpf, phone, level, address } = req.body;

    const transaction = await db.transaction();

    try {
      const insertedUser = await transaction('users').insert({
        id: `${uuid()}`,
        name,
        email,
        password: md5(password),
        cpf,
        phone,
        level
      }).returning('id');

      const user_id = insertedUser[0];

      const insertedAddress = await transaction('addresses').insert({
        id: uuid(),
        street: address.street,
        number: address.number,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode,
        owner_id: user_id
      });

      await transaction.commit();

      return res.status(201).send();
    } catch (err) {
      await transaction.rollback();

      return res.status(400).json({ error: 'Unexpected error while creating new user.' });
    }
  }
}

export default new UserController();
