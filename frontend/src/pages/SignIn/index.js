import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi'

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import books from '../../assets/books.svg';

import { Container } from './styles'

const SignIn = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const { email, password } = formData;

    const response = await api.post('/session', {
      email: email,
      password: password,
    });

    localStorage.setItem('@Spellit:user', JSON.stringify(response.data.user));
    localStorage.setItem('@Spellit:student', JSON.stringify(response.data.student));
    
    setTimeout(() => {
      history.push('/activities');
    }, 2000);
  }, [formData, history])

  return (
    <Container>
      <nav>
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit} >
          <div>
            <FiMail size={24} color="#2b2b2b" />
            <input className="email" type="text" placeholder="E-mail" name="email" onChange={handleInputChange} />
          </div>
          <div>
            <FiLock size={24} color="#2b2b2b" />
            <input className="password" type="password" placeholder="Senha" name="password"onChange={handleInputChange}  />
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