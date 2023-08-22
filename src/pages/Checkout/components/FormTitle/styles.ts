import styled from 'styled-components'

export const TitleForm = styled.div`
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
