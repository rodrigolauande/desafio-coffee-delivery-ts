import styled from 'styled-components'

export const Information = styled.div`
  border: solid 1px transparent;
  border-radius: 6px 36px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(to right, #c47f17, #4b2995) border-box;

  display: flex;
  flex-wrap: wrap;

  width: 35rem;
  height: 16.87rem;

  gap: 2.5rem;
  padding: 2rem;

  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.baseText};

  span:nth-child(1) {
    background: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.background};
    width: 2rem;
    height: 2rem;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p:nth-child(2) {
    width: 23.5rem;
    height: 2.5rem;
  }

  span:nth-child(3) {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.background};
    width: 2rem;
    height: 2rem;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p:nth-child(4) {
    width: 25rem;
    height: 2.5rem;
  }
  span:nth-child(5) {
    background: ${(props) => props.theme.yellowdark};
    color: ${(props) => props.theme.background};
    width: 2rem;
    height: 2rem;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p:nth-child(6) {
    width: 10.12rem;
    height: 2.5rem;
  }
`
