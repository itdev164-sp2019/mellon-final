import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Nav = () => (
  <Div1>
    <Div3>

    </Div3>
  </Div1>
)

const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  width: 100%;
  @media (max-width: 768px) {
    grid-auto-flow: rows;
    justify-items: center;
    grid-template-areas:
      "logo"
      "nav";
  }
`

const Div3 = styled.div`
  grid-area: "nav";
  display: grid;
  justify-items: end;
  padding-right: 2rem;
  margin: 2rem 0;
`

const Link1 = styled(Link)`
  color: rgba(29, 104, 145, 0.5);

  font-size: 0.8rem;
  text-decoration: none;
  border-right: 5px solid white;
  padding: 1rem;
  &:hover {
    text-decoration: none;
    border-right: 5px solid black;
    color: black;
    text-shadow: 0 0 3px white;
  }
`
const H11 = styled.h1`
  font-family: "Crimson Text", serif;
  margin: 0;
  font-size: 2.4rem;
`

export default Nav
