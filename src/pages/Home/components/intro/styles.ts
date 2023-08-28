import styled from 'styled-components'

export const IntroContainer = styled.main`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;

  h1 {
    flex-wrap: wrap;
    font-family: 'Baloo 2';
    font-size: 48px;
    font-weight: 700;

    width: 35rem;

    color: ${(props) => props.theme.baseTitle};

    line-height: 1.5;
  }

  p {
    flex-wrap: wrap;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 400;

    width: 35rem;

    color: ${(props) => props.theme.baseSubtitle};

    line-height: 1.5;
  }
`

export const IntroItems = styled.main`
  display: flex;
  flex-wrap: wrap;

  margin-top: 4rem;
  gap: 0.5rem;

  width: 35rem;

  span {
    border: solid 1px;
    display: flex;
    padding: 0.5rem 0;

    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    display: flex;
    margin: 0;

    justify-content: start;
    align-items: center;

    width: 16rem;

    font-family: 'Roboto';
    font-size: 16px;
    color: ${(props) => props.theme.baseText};
  }

  span:nth-child(1) {
    background: ${(props) => props.theme.yellowdark};
    color: ${(props) => props.theme.background};
    border-radius: 100px;
  }
  span:nth-child(3) {
    background: ${(props) => props.theme.baseText};
    color: ${(props) => props.theme.background};
    border-radius: 100px;
  }
  span:nth-child(5) {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.background};
    border-radius: 100px;
  }
  span:nth-child(7) {
    background: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.background};
    border-radius: 100px;
  }

  p:nth-child(2) {
    width: 13rem;
  }
  p:nth-child(6) {
    width: 13rem;
  }
`
