import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  height: 100px;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  border: 1px solid;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`
