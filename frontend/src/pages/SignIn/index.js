import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi'

import logo from '../../assets/logo.svg';
import books from '../../assets/books.svg';

import { Container } from './styles'

const SignIn = () => {
  return (
    <Container>
      <nav>
        <img src={logo} alt="logo" />
        <form>
          <div>
            <FiMail size={20} color="#2b2b2b" />
            <input className="email" type="text" placeholder="E-mail" name="email" />
          </div>
          <div>
            <FiLock size={20} color="#2b2b2b" />
            <input className="password" type="password" placeholder="Senha" name="password" />
          </div>
          <button type="submit" >Entrar</button>
        </form>
      </nav>
      <aside>
        <div>
          <span>Aprenda idiomas</span>
        </div>
        <img src={books} alt="books" />
        <div>
          <span>do jeito certo</span>
        </div>
      </aside>
    </Container>
  )
}

export default SignIn;