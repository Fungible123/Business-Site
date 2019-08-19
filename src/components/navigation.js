import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  max-width: 1120px;
  max-height: 67px;
  border-top: 1px solid #fa5959;
  border-bottom: 1px solid #fa5959;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 672px;
  margin: 0 auto;
  justify-content: center;
`

const Item = styled(Link)`
  text-decoration: none;
  margin: 10px 20px;

  h2 {
    transition: 0.2s ease-in-out;
  }
  h2:hover {
    color: ${props => props.theme.color.red.primary};
  }

  &.active h2 {
    color: ${props => props.theme.color.red.primary};
  }
`

const Navigation = () => {
  return (
    <Nav>
      <Menu>
        <Item to="/blush/" activeClassName="active">
          <h2>Blush</h2>
        </Item>
        <Item to="/eyeliner/" activeClassName="active">
          <h2>Eyeliner</h2>
        </Item>
        <Item to="/foundation/" activeClassName="active">
          <h2>Foundation</h2>
        </Item>
        <Item to="/lipstick/" activeClassName="active">
          <h2>Lipstick</h2>
        </Item>
        <Item to="/mascara/" activeClassName="active">
          <h2>Mascara</h2>
        </Item>
      </Menu>
    </Nav>
  )
}

export default Navigation
