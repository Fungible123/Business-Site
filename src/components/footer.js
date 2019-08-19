import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Container, Section } from "@styles/containers"
import Img from "gatsby-image"
import styled from "styled-components"

const Icons = styled(Img)`
  max-width: 42px;
  max-height: 42px;
  margin: 10px auto;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
  margin: 100px 0;
`

const SocialCards = styled.div`
  width: 224px;
  height: 100%;
  text-align: center;
  p {
    &:nth-child(1) {
      font-weight: bold;
      color: ${props => props.theme.color.dark.secondary};
    }
    ${props => props.theme.font_size.small};
    color: ${props => props.theme.color.dark.secondary};
  }
  a {
    text-decoration: none;
    ${props => props.theme.font_size.small};
    color: ${props => props.theme.color.dark.secondary};
  }
`

const Footnote = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.dark.secondary};
  text-align: center;
  margin: 50px 0;
`

const Footer = () => {
  const social = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook-2429746_640.png" }) {
        childImageSharp {
          fluid(maxWidth: 42, maxHeight: 42, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      instagram: file(relativePath: { eq: "600px-Instagram_logo_2016.png" }) {
        childImageSharp {
          fluid(maxWidth: 42, maxHeight: 42, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      twitter: file(relativePath: { eq: "Twitter_icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 42, maxHeight: 42, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Section>
        <CardContainer>
          <SocialCards>
            <p>Quick Links</p>
            <hr />
            <Link to="/about">About us</Link>
            <br />
            <Link to="/location">Location</Link>
            <p>Terms & Conditions</p>
          </SocialCards>
          <SocialCards>
            <p>Follow Us</p>
            <hr />
            <a
              href="http://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons
                fluid={social.facebook.childImageSharp.fluid}
                alt="facebook"
              />
            </a>
            <a
              href="http://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons
                fluid={social.instagram.childImageSharp.fluid}
                alt="instagram"
              />
            </a>
            <a
              href="http://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons
                fluid={social.twitter.childImageSharp.fluid}
                alt="twitter"
              />
            </a>
          </SocialCards>
          <SocialCards>
            <p>Contact</p>
            <hr />
            <p>email@address.com</p>
          </SocialCards>
        </CardContainer>
        <Footnote>
          Site inpiration from makeupdepotph.com. Kiss & Makeup, powered by
          Gatsby
        </Footnote>
      </Section>
    </Container>
  )
}

export default Footer
