import styled from 'styled-components'

export const SuccessMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;

  img {
    margin-top: 6rem;
  }
`

export const SuccessDivs = styled.div`
  display: flex;
  flex-direction: column;
`

export const SuccessInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 3rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 32px;
    font-weight: 700;
    color: ${(props) => props.theme.yellowdark};
  }

  h3 {
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.baseSubtitle};
  }
`
