import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { useStaticQuery, graphql } from "gatsby"
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
          {product.allInternalPosts.edges.map(({ node }, ...index) => (
            <ProductContainer key={index}>
              <ul>
                <li>
                  <img src={node.api_featured_image} alt={`${node.name}`} />
                </li>
                <li>{node.brand}</li>
                <li>{node.name}</li>
                <li>
                  {node.price_sign}
                  {node.price}
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
