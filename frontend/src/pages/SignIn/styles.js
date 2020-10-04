import styled from 'styled-components';
import { darken } from 'polished';

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
        border-radius: 8px;
        border: 2px solid #2b2b2b;
        padding: 16px;
        width: 100%;
        color: #2b2b2b;

        display: flex;
        align-items: center;

        & + div {
          margin-top: 16px;
        }

        &:focus-within {
          border-color: #226699;

          svg {
            color: #226699 !important;
          }
        }

        input {
          flex: 1;
          background: transparent;
          border: 0;
          color: #666360;
          font-size: 16px;

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
        padding: 22px;
        width: 100%;
        border-radius: 8px;
        font-size: 16px;

        background-color: #226699;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
          background-color: ${darken(0.05, '#226699')}
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

