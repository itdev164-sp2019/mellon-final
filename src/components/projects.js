import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Projects = () => (
  <Div0>
    <Div1>
      <Div2>
        <a
          href="https://www.github.com"
          style={{ color: "rgb(29, 104, 145)", textDecoration: "none" }}
          alt="Github"
          target="_blank"
        >
          <H2>React Projects</H2>
        </a>
      </Div2>
      <Div2>
        <a
          href="https://www.github.com"
          style={{ color: "rgb(29, 104, 145)", textDecoration: "none" }}
          alt="Github"
          target="_blank"
        >
          <H2>C# Projects</H2>
        </a>
      </Div2>
      <Div2>
        <a
          href="https://www.github.com"
          style={{ color: "rgb(29, 104, 145)", textDecoration: "none" }}
          alt="Github"
          target="_blank"
        >
          <H2>Java Projects</H2>
        </a>
      </Div2>
    </Div1>
  </Div0>
)

const Div0 = styled.div`
  padding: 5rem 0;
  width: 90%;
  margin: 0 auto;
`

const Div1 = styled.div`
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Div2 = styled.div`
  padding-top: 3rem 0;
`

const H1a = styled.h1`
  font-family: sans-serif;
  margin-bottom: 2rem;
`

const P2 = styled.p`
  font-family: sans-serif;
  font-size: 1.6rem;
  margin-bottom: 2rem;
`

const H2 = styled.h2`
  font-size: 2.2rem;
  text-decoration: none;
  font-color: black;
  padding: 0.5rem;
`

export default Projects
