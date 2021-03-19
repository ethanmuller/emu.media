import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import SketchWrapper from '../components/sketchWrapper'
import sketch from '../scripts/sketches/a-1'

const Page = () => (
  <article>
    <Link style={{ position: 'fixed', bottom: 0, right: 0, display: 'block', padding: '3rem', }} to="/">home</Link>
    <SEO title="emu media: A-1" />
    <SketchWrapper sketch={sketch}/>
    <div>A-1</div>
  </article>
)

export default Page
