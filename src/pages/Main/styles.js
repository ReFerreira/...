import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 32rem;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;

    input {
      color: #333333;
      border: #efeeed;
      padding: 0 1.5rem;
      margin: 0 0 1rem;
      height: 4.4rem;
      border-radius: 4px;

      &::placeholder {
        color: #333333;
      }
    }

    button {
      margin: 0.5rem 0 0;
      height: 4.4rem;
      background: #00c8b3;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      border-radius: 2rem;

      &:hover {
        opacity: 0.7;
      }

      /* &[disabled] {
        cursor: not-allowed;
        background: #f6f6f6;
        color: #dddcdc;
        opacity: 0.6;
      } */
    }

    span {
      color: #eb4a46;
      border: #eb4a46;
      align-self: flex-start;
      margin: 0 0 1rem;
      font-weight: bold;
    }

    a {
      color: #fff;
      margin-top: 1.5rem;
      font-size: 1.6rem;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
