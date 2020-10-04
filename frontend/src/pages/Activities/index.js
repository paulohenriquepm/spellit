import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';

import api from '../../services/api';

import logoWord from '../../assets/logo-word.svg';
import studying from '../../assets/studying.svg';
import profile from '../../assets/profile.png';

import { Container, Header, HeaderContent, Profile, Content, ActivitiesContainer, ActivitiesList, Pending, Delivered, Activity } from './styles';

const Activities = () => {
  const user = JSON.parse(localStorage.getItem('@Spellit:user'));
  const student = JSON.parse(localStorage.getItem('@Spellit:student'));

  const [pendingActivities, setPendingActivities] = useState([]);
  const [deliveredActivities, setDeliveredActivities] = useState([]);

  useEffect(() => {
    async function loadActivities() {
      const [activitiesResponse, studentActivies] = await Promise.all([
        api.get(`/activities/${student.class_id}`, {
          params: {
            student: student.id,
          }
        }),
        api.get(`/student-activities/${student.id}`),
      ]) ;

      const formattedPendingActivities = activitiesResponse.data.map(activity => ({
        ...activity, 
        delivery_date: format(parseISO(activity.delivery_date), 'dd/MM/yyyy')
      }));
    
      const formattedStudentActivies = studentActivies.data.map(activity => ({
        ...activity,
        delivered_date: format(parseISO(activity.delivered_date), 'dd/MM/yyyy')
      }));

      setPendingActivities(formattedPendingActivities);
      setDeliveredActivities(formattedStudentActivies);
    }

    loadActivities();
  }, [student.class_id, student.id])

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoWord} alt="Spell It" />

          <Profile>
            <img src={profile} alt="Usuário" />
            <div>
              <span>Olá,</span>
              <Link to="profile">
                <strong>{user.name}</strong>
              </Link>
            </div>

          </Profile>

          <button type="button">
            <FiLogOut size={20} color="#2b2b2b" />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <ActivitiesContainer>  
          <Pending>
            <strong>Pendentes</strong>

            <ActivitiesList>
              {pendingActivities && pendingActivities.map(pendingActivity => (
                <Activity key={pendingActivity.id} >
                  <span>{pendingActivity.name}</span>
                  <div>
                    <span>Data de entrega: {pendingActivity.delivery_date}</span>
                    <span>Valor: {pendingActivity.points} pontos</span>
                  </div>
                </Activity>
              ))}
            </ActivitiesList>
          </Pending>
          <Delivered>
            <strong>Entregues</strong>

            <ActivitiesList>
              {deliveredActivities && deliveredActivities.map(delivered => (
                <Activity key={delivered.id}>
                  <span>{delivered.name}</span>
                  <div>
                    <span>Entregue em: {delivered.delivered_date}</span>
                    <span>Nota: {delivered.points} pontos</span>
                  </div>
                </Activity>
              ))}
            </ActivitiesList>
          </Delivered>
        </ActivitiesContainer>
        <img src={studying} alt="estudando" />
      </Content>
    </Container>
  )
}

export default Activities;