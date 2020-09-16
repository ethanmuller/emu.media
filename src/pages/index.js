import React from "react"

import SEO from "../components/seo"
import MeImg from "../images/crusty-hard-128.gif"

const links = [
  {
    title: 'Cadavre Exquis',
    href: 'https://cadavre-exquis.glitch.me/public/',
    description: 'A web app in which we draw a very tall picture together. Drawings show up live. Play it with friends!',
  },
  {
    title: 'Goofball',
    href: 'https://goofball.fun',
    description: 'A mobile game in which you touch and drag to hit the long-eyed dudes.',
  },
  {
    title: 'Wooltergeist',
    href: 'https://emuuuu.itch.io/wooltergeist',
    description: `A web game in which you are a demon! Possess and unpossess to progress!
A Pico-8 game, made in 48 hours.`,
  },
]


const IndexPage = () => (
  <>
    <SEO title="emu media" />
    
    <header>
      <img src={MeImg} alt="Crusty drawing of me" />
    </header>
    
    <main>
      
    </main>
  </>
)

export default IndexPage
