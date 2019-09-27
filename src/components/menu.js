import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ProductContainer, InternalContainer } from "@styles/containers"

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  border-top: 1px solid #fa5959;
  border-bottom: 1px solid #fa5959;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: ${props => props.theme.screen.lg}) {
  }
`

const Item = styled.a`
  text-decoration: none;
  margin: 10px 10px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin: 5px 15px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    margin: 5px 6px;
  }

  h3 {
    text-transform: capitalize;
    transition: 0.2s ease-in-out;
    @media (max-width: ${props => props.theme.screen.sm}) {
      ${props => props.theme.font_size.small}
    }
  }
  h3:hover {
    color: ${props => props.theme.color.red.primary};
  }
`

const getProduct = items => {
  let tempItems = items.map(item => {
    return item.node.product_type
  })
  let tempProductType = new Set(tempItems)
  let products = Array.from(tempProductType)
  products = ["all", ...products]
  return products
}

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      makeupItems: props.items.edges,
      products: getProduct(props.items.edges),
    }
  }
  handleItems = product => {
    let tempItems = [...this.state.items]
    if (product === "all") {
      this.setState(() => {
        return {
          makeupItems: tempItems,
        }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.product_type === product)
      this.setState(() => {
        return {
          makeupItems: items,
        }
      })
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <div>
          <Nav>
            <List>
              {this.state.products.map((product, index) => {
                return (
                  <Item
                    key={index}
                    onClick={() => {
                      this.handleItems(product)
                    }}
                  >
                    <h3>{product}</h3>
                  </Item>
                )
              })}
            </List>
          </Nav>
          <InternalContainer>
            {this.state.makeupItems.map((edge, ...index) => {
              return (
                <ProductContainer key={index}>
                  <ul>
                    <li>
                      <Link to={`/products/${edge.node.fields.slug}`}>
                        <img
                          src={edge.node.api_featured_image}
                          alt={`${edge.node.name}`}
                        />
                      </Link>
                    </li>
                    <li>{edge.node.brand}</li>
                    <li>{edge.node.name}</li>
                    <li>
                      {edge.node.price_sign}
                      {edge.node.price}
                    </li>
                  </ul>
                </ProductContainer>
              )
            })}
          </InternalContainer>
        </div>
      )
    } else {
      return (
        <div>
          <Nav>
            <List>
              {this.state.products.map((product, index) => {
                return (
                  <Item
                    activeClassName="active"
                    key={index}
                    onClick={() => {
                      this.handleItems(product)
                    }}
                  >
                    <h3>{product}</h3>
                  </Item>
                )
              })}
            </List>
          </Nav>
          <InternalContainer>
            <h1>There are no products to display...</h1>
          </InternalContainer>
        </div>
      )
    }
  }
}

export default Menu
