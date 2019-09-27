import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { graphql } from "gatsby"
import { Container, Section } from "@styles/containers"
import Menu from "@components/menu"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `business`, `react`, `ecommerce`]}
      />
      <Container>
        <Section>
          <Menu items={data.menu} />
        </Section>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    menu: allInternalPosts(limit: 50) {
      edges {
        node {
          id
          api_featured_image
          brand
          name
          price_sign
          price
          product_type
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
