import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  Section,
  ProductContainer,
  InternalContainer,
} from "@styles/containers"

const IndexPage = () => {
  const product = useStaticQuery(graphql`
    query {
      allInternalPosts(limit: 12) {
        edges {
          node {
            api_featured_image
            brand
            name
            price_sign
            price
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <InternalContainer>
          {product.allInternalPosts.edges.map((edge, ...index) => (
            <ProductContainer key={index}>
              <ul>
                <li>
                  <Link to={`/product/${edge.node.id}`}>
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
          ))}
        </InternalContainer>
      </Section>
    </Layout>
  )
}

export default IndexPage
