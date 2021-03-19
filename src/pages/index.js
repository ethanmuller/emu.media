import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"


const homeMainStyle = {
  maxWidth: "32em",
}

const IndexPage = () => (
  <>
    <SEO title="emu media" />

    <main style={homeMainStyle}>
      <ul>
        <li>
          <Link to="a-1">A-1</Link>
        </li>
      </ul>
    </main>
  </>
)

export default IndexPage
