import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    color: #fff;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Content = styled.ul`
  background: #eee;
  max-height: 100%;
  width: 73rem;
  margin-top: 3rem;

  li {
    margin: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 1px solid #191921;
    padding: 1rem 0;
    aside {
      display: flex;
      flex-direction: column;
    }
    h1 {
      font-size: 2rem;
    }

    span {
    }

    button {
      margin: 0.5rem 0 0;
      height: 4.4rem;
      background: #00c8b3;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      padding: 1rem;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 768px) {
    width: 30rem;
    /* margin-top: 2rem; */

    li {
      flex-direction: column;
    }
  }
`;
