import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { Container, Section } from "@styles/containers"
import styled from "styled-components"

const Title = styled.h1`
  margin: 50px 0px;
`

const AboutUs = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.dark.secondary};
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Section>
          <Title>About Us</Title>
          <AboutUs>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment. Bring to the table win-win
            survival strategies to ensure proactive domination. At the end of
            the day, going forward, a new normal that has evolved from
            generation X is on the runway heading towards a streamlined cloud
            solution. User generated content in real-time will have multiple
            touchpoints for offshoring. Capitalize on low hanging fruit to
            identify a ballpark value added activity to beta test. Override the
            digital divide with additional clickthroughs from DevOps.
            Nanotechnology immersion along the information highway will close
            the loop on focusing solely on the bottom line.
          </AboutUs>
        </Section>
      </Container>
    </Layout>
  )
}

export default About
