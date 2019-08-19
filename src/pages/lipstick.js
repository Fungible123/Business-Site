import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import {
  Section,
  ProductContainer,
  InternalContainer,
} from "@styles/containers"

const Lipstick = () => {
  const product = useStaticQuery(graphql`
    query {
      lipstick: allInternalPosts(
        limit: 12
        filter: { product_type: { eq: "lipstick" } }
      ) {
        edges {
          node {
            api_featured_image
            brand
            name
            price_sign
            price
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Lipstick" />
      <Section>
        <InternalContainer>
          {product.lipstick.edges.map(({ node }, ...index) => (
            <ProductContainer key={index}>
              <ul>
                <li>
                  <Link to={`/products/${node.fields.slug}`}>
                    <img src={node.api_featured_image} alt={`${node.name}`} />
                  </Link>
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

export default Lipstick
