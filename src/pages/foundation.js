import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "@components/layout"
import {
  Section,
  ProductContainer,
  InternalContainer,
} from "@styles/containers"

const Foundation = () => {
  const product = useStaticQuery(graphql`
    query {
      foundation: allInternalPosts(
        limit: 12
        filter: { product_type: { eq: "foundation" } }
      ) {
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
      <Section>
        <InternalContainer>
          {product.foundation.edges.map(({ node }, ...index) => (
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

export default Foundation
