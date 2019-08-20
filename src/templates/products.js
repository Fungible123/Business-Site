import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { Container, Section } from "@styles/containers"
import styled from "styled-components"

const Content = styled.div`
  max-width: 672px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 50px auto;
  align-items: center;
`

const ImageContainer = styled.div`
  margin-right: 10px;
`

const ContentContainer = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  @media (max-width: ${props => props.theme.screen.md}) {
    h1 {
      font-weight: bold;
      ${props => props.theme.font_size.regular}
    }
    h2 {
      ${props => props.theme.font_size.small}
    }
    p {
      ${props => props.theme.font_size.small}
    }
  }
`

const Image = styled.img`
  max-width: 400px;
  max-height: 300px;
  @media (max-width: ${props => props.theme.screen.md}) {
    max-width: 300px;
    max-height: 200px;
  }
`

const Description = styled.div`
  max-width: 672px;
  margin: 50px auto;
  p {
    text-align: justify;
  }
  h1 {
    margin-bottom: 20px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    h1 {
      font-weight: bold;
      ${props => props.theme.font_size.regular}
    }
    p {
      ${props => props.theme.font_size.small}
    }
  }
`

export const query = graphql`
  query MyQuery2($slug: String!) {
    internalPosts(fields: { slug: { eq: $slug } }) {
      api_featured_image
      brand
      description
      name
      price
      price_sign
    }
  }
`

const Products = props => {
  return (
    <Layout>
      <SEO title={props.data.internalPosts.name} />
      <Container>
        <Section>
          <Content>
            <ImageContainer>
              <Image
                src={props.data.internalPosts.api_featured_image}
                alt={props.data.internalPosts.brand}
              />
            </ImageContainer>
            <ContentContainer>
              <h1>{props.data.internalPosts.brand}</h1>
              <h2>{props.data.internalPosts.name}</h2>
              <p>
                {props.data.internalPosts.price_sign}
                {props.data.internalPosts.price}
              </p>
            </ContentContainer>
          </Content>

          <Description>
            <h1>About Product</h1>
            <p>{props.data.internalPosts.description}</p>
          </Description>
        </Section>
      </Container>
    </Layout>
  )
}

export default Products
