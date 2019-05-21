import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import { Nav } from "../components"

const Header = () => (
  <Section1>
    <Nav />
    <Div1>
      <H1a> Weather 2.0 </H1a>
    </Div1>
  </Section1>
)

const Section1 = styled.div`
  display: center;
  align-content: space-between;
  justify-items: center;
  background: rgb(29, 104, 145) 0%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`
const Div1 = styled.div`
  text-align: center;
  border-radius: 50%;
`
const H1a = styled.h1`
  font-size: 5rem;
  margin: 0;
  color: white;
  text-decoration: underline;
  font-family: "Crimson Text", serif;
  text-shadow: 0 0 20px gray;
  padding: 3rem 0;
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`
const H1b = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  &:hover {
    text-shadow: 0 0 5px white;
    color: white;
  }
`
const P1 = styled.p`
  font-size: 2.5rem;
  margin: 0;
  color: white;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
const Link1 = styled(Link)`
  text-decoration: none;
  color: white;
`

export default Header
