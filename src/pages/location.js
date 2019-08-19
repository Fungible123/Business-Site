import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { Container, Section } from "@styles/containers"
import styled from "styled-components"

const Title = styled.h1`
  margin: 50px 0px;
`

const Company = styled.p`
  color: ${props => props.theme.color.red.secondary};
  text-decoration: underline;
  margin-bottom: 20px;
`

const Address = styled.p`
  margin-bottom: 20px;
`

const Hours = styled.p`
  font-weight: bold;
`

const Location = () => {
  return (
    <Layout>
      <SEO title="Location" />
      <Container>
        <Section>
          <Title>Location</Title>
          <Company>Kiss & Makeup</Company>
          <Address>
            7F Poison Ivy Place
            <br />
            123 Mascara Hwy
            <br />
            New Town 2020
            <br />
            Neverland
          </Address>
          <Hours>Opening Hours:</Hours>
          <p>Sundays 1:00 - 1:00</p>
        </Section>
      </Container>
    </Layout>
  )
}

export default Location
