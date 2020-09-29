import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  nav {
    width: 100%;
    max-width: 700px;

    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 25px;
    }

    form {
      width: 340px;

      div {
        border-radius: 4px;
        border: 2px solid #2b2b2b;
        padding: 8px;
        width: 100%;
        color: #2b2b2b;

        display: flex;
        align-items: center;

        & + div {
          margin-top: 8px;
        }

        input {
          flex: 1;
          background: transparent;
          border: 0;
          color: #f4ede8;

          &::placeholder {
            color: #666360;
          }

        }

        svg {
          margin-right: 16px;
        }
      }

      button {
        margin-top: 16px;
        padding: 10px 8px;
        width: 100%;
        border-radius: 4px;

        background-color: #226699;
        color: #fff;
        font-weight: bold;

        &:hover {

        }
      }
    }
  }

  aside {
    flex: 2;
    margin-left: 160px;
    
    div {
      display: flex;

      span {
        color: #226699;
        font-size: 64px;
        flex: 1;
      }

      &:nth-child(1) span {
        text-align: left;
      }

      &:nth-child(3) span {
        text-align: right;
      }
    }

    img {
      width: 550px;
      height: 450px;
    }
  }
`;

