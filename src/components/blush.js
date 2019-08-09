import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Blush = () => {
  const { product } = useStaticQuery(graphql`
    query {
      allInternalPosts {
        edges {
          node {
            name
            brand
            category
          }
        }
      }
    }
  `)
  return (
    <div>
      {product.allInternalPosts.edges.map(({ node }, ...index) => (
        <div key={index}>
          {node.results &&
            node.results.map((product, ...index) => (
              <div key={index}>
                <ul>
                  <li>{product.name}</li>
                  <li>{product.brand}</li>
                  <li>{product.category}</li>
                </ul>
              </div>
            ))}
        </div>
      ))}
    </div>
  )
}

export default Blush
