import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const Header = styled.header`
  padding: 16px;
  margin-bottom: 56px;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  
  display: flex;
  align-items: center;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }
`;

export const Profile = styled.div`
  margin-left: 80px;
  
  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    display: flex;
    flex-direction: column;

    span {
      color: #226699;
    }

    a {
      text-decoration: none;
      color: #2b2b2b;
      transition: opacity 0.2;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  padding: 16px;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  img {
    margin-left: 150px;
    width: 450px;
    height: 450px;
  }
`;

export const ActivitiesContainer = styled.div`
  height: 100%;
  width: 450px;

  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Pending = styled.div`
  margin-bottom: 56px;
  min-height: 300px;

  strong {
    color: #FF1616;
    font-size: 36px;
    margin-bottom: 48px;
  }
`;

export const Delivered = styled.div`
  min-height: 300px;

  strong {
    color: #226699;
    font-size: 36px;
    margin-bottom: 48px;
  }
`;

export const ActivitiesList = styled.div`
  height: 100%;
  margin-top: 48px;
`;

export const Activity = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #c4c4c4;
  
  span {
    font-size: 24px;
    color: #2b2b2b;
  }

  div {
    margin-top: 4px;
    display: flex;
    justify-content: space-between;

    span {
      color: #a3a3a3;
      font-size: 14px;
    }
  }
`;