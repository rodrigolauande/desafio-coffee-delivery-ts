import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 8px 25px 8px 25px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 16rem;
  height: 20rem;

  background: ${(props) => props.theme.baseCard};

  img {
    margin: -5rem 0 1rem 0;
  }

  ul {
    display: flex;
    gap: 1rem;
  }

  li {
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 5rem;
    height: 1.5rem;

    font-family: 'Roboto';
    font-size: 10px;
    font-weight: bold;
    color: ${(props) => props.theme.yellowdark};
    background: ${(props) => props.theme.yellowlight};
  }

  span {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 20px;
    margin-top: 1rem;
  }

  p {
    font-family: 'Roboto';
    font-size: 14px;
    color: ${(props) => props.theme.baseLabel};

    text-align: center;

    width: 13.5rem;
    height: 2.5rem;

    margin-top: 0;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 14rem;
    height: 2.5rem;

    margin-top: 2rem;
    padding: 1.5rem;
    gap: 0.5rem;
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 24px;
    color: ${(props) => props.theme.baseText};

    width: 4rem;
    height: 2rem;
  }

  h1 span {
    font-family: 'Roboto';
    font-size: 10px;
    color: ${(props) => props.theme.baseLabel};
    margin-right: 0.2rem;
  }

  footer div {
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;

    background: ${(props) => props.theme.baseHover};

    width: 6rem;
    height: 1.5rem;
  }

  footer div button {
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
    margin-top: 0.5rem;
    padding: 0.3rem;
  }

  footer div p {
    font-family: 'Roboto';
    font-size: 16px;
    color: ${(props) => props.theme.baseTitle};
    padding: 0.5rem;
  }

  button {
    border-radius: 8px;
    background: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.background};

    width: 2.5rem;
    height: 2.5rem;

    padding: 0.5rem;
    border: none;
  }
`
