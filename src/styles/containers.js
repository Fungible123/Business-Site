import styled from "styled-components"

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1350px;
  }

  ${props =>
    props.fluid &&
    `max-width: 1200px !important;
    `}
`

export const Section = styled.section`
  padding: 0;
  margin: 0 112px;
  overflow: hidden;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 0;
    margin: 0 100px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 0;
    margin: 0 50px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    margin: 5px;
  }
`

export const InternalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 40px 0;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

export const ProductContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  ul {
    width: 100%;
    height: 100%;
    padding: 0 10px;
  }
  li {
    list-style-type: none;
    text-align: center;
    margin-top: 10px;
    &:nth-child(2) {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  img {
    max-width: 247px;
    max-height: 212px;
  }
`
