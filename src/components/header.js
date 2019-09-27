import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Section } from "@styles/containers"
import styled from "styled-components"
// import Navigation from "./navigation"

const Logo = styled(Img)`
  max-width: 672px;
  max-height: 188px;
  margin: 0 auto;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "kissandmakeup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 672, maxHeight: 188, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Section>
        <Link to="/">
          <Logo fluid={data.logo.childImageSharp.fluid} />
        </Link>
        {/* <Navigation /> */}
      </Section>
    </Container>
  )
}

export default Header
