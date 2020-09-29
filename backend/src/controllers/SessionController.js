import jwt from 'jsonwebtoken';
import md5 from 'md5';

import authConfig from '../config/auth';

import db from '../database/connection';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await db('users').select('*').where('email', '=', email);

    console.log(user);

    if (!user[0]) {
      return res.status(401).json({ error: 'Email e/ou senha inválidos' });
    }

    const encodedPassword = md5(password);

    if (!(encodedPassword === user[0].password)) {
      return res.status(401).json({ error: 'Email e/ou senha inválidos' });
    }

    const { id, name, level } = user[0];

    const session = {
      user: {
        id,
        email,
        name,
        level
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    };

    return res.json(session);
  }
}

export default new SessionController();
