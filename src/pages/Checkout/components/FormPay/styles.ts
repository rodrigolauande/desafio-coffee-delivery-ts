import styled from 'styled-components'

export const TitleCard = styled.div`
  display: flex;

  width: 35rem;
  height: 2.75rem;

  span {
    display: flex;
    padding: 0.5rem 0;

    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: end;

    color: ${(props) => props.theme.yellowdark};
  }

  div {
    display: flex;

    flex-wrap: wrap;
    width: 33.12rem;
    height: 1.31rem;

    margin: x1.87rem;

    font-family: 'Roboto';
    color: ${(props) => props.theme.baseText};
  }

  h1 {
    font-size: 16px;
    margin: 0;
  }

  p {
    font-size: 14px;
    margin: y1.43rem;
  }
`

export const CardPagamento = styled.div`
  border: transparent;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  margin-top: 1.5rem;

  width: 39.9rem;

  padding: 2rem;

  background: ${(props) => props.theme.baseCard};

  span {
    display: flex;
    color: ${(props) => props.theme.purple};
  }

  footer {
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-top: 1.5rem;
  }

  footer button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: transparent;
    border-radius: 6px;
    width: 11.16rem;
    height: 3.18rem;
    background: ${(props) => props.theme.baseButton};
    color: ${(props) => props.theme.baseText};
    font-family: 'Roboto';
    font-size: 14px;
    gap: 0.5rem;
  }
`
