import React from "react"

import SEO from "../components/seo"
import MeImg from "../images/crusty-hard-128.gif"

const homeMainStyle = {
  maxWidth: '32em',
}

const IndexPage = () => (
  <>
    <SEO title="emu media" />
    
    <header>
      <img src={MeImg} alt="crusty drawing of me" />
      <div>
        <h1>hi, i am <a href="https://www.ethanmuller.com/">ethan muller</a>.</h1>
        <p>here are some media i've made&nbsp;for&nbsp;you:</p>
      </div>
    </header>
    
    <main style={homeMainStyle}>
      <ul>
        <li><a href="https://cadavre-exquis.emu.media/public/">cadavre exquis</a> is a web app in which we draw a very tall picture together. drawings show up live. it's fun to play in groups. :)</li>
        <li><a href="https://goofball.fun">goofball</a> is a mobile game in which you touch and drag to hit the long-eyed dudes. don't touch the ground to get a hi combo.</li>
        <li><a href="https://emuuuu.itch.io/wooltergeist">wooltergeist</a> is a game in which you are a demon! possess and unpossess to progress! playable in your browser! made in 48 hours.</li>
      </ul>
    </main>
  </>
)

export default IndexPage
