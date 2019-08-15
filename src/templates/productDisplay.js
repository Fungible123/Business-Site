import React from "react"
import Layout from "@components/layout"
import { Section } from "@styles/containers"
import { useStaticQuery, graphql } from "gatsby"

const productDisplay = () => {
  const item = useStaticQuery(graphql`
    query {
      allInternalPosts {
        edges {
          node {
            name
            api_featured_image
            brand
            name
            price_sign
            price
            description
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Section>
        {item.allInternalPosts.edges.map((edge, ...index) => (
          <div key={index}>
            <div>
              <img
                src={edge.node.api_featured_image}
                alt={`${edge.node.name}`}
              />
              <h2>{edge.node.brand}</h2>
              <p>{edge.node.name}</p>
              <p>
                {edge.node.price_sign} {edge.node.price}
              </p>
            </div>
            <div>
              <h2>About Product</h2>
              <p>{edge.node.description}</p>
            </div>
          </div>
        ))}
      </Section>
    </Layout>
  )
}

export default productDisplay
