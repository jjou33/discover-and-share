import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;
`
export const MainContainer = styled.main`
  width: 1000px;
  margin: 80px auto;
  @media screen and (max-width: 1000px) {
    width: 800px;
  }
`
