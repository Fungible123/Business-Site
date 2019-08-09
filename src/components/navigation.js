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
`

const Item = styled(Link)`
  text-decoration: none;
  margin: 10px;

  h2 {
    transition: 0.2s ease-in-out;
  }
  h2:hover {
    color: ${props => props.theme.color.red.primary};
  }
`

const Navigation = () => {
  return (
    <Nav>
      <Menu>
        <Item to="/">
          <h2>Blush</h2>
        </Item>
        <Item to="/">
          <h2>Eyeliner</h2>
        </Item>
        <Item to="/">
          <h2>Foundation</h2>
        </Item>
        <Item to="/">
          <h2>Lipstick</h2>
        </Item>
        <Item to="/">
          <h2>Mascara</h2>
        </Item>
      </Menu>
    </Nav>
  )
}

export default Navigation
