import React from 'react'

import {RadioGroup, Radio} from 'react-radio-group'

import Gear from '../svg/gear.svg'

const themes = {
  normal: {
    '--fg': 'black',
    '--bg': 'white',
    '--link': '#001AFF',
    '--link-active': '#FF00B8',
    '--link-visited': '#A46DC6',
  },
  night: {
    '--fg': 'white',
    '--bg': 'black',
    '--link': '#0075FF',
    '--link-active': '#94F9FF',
    '--link-visited': '#9667B2',
  },
  jeopardy: {
    '--fg': '#FFFFFF',
    '--bg': '#001AFF',
    '--link': '#FFE03E',
    '--link-active': '#ffffff',
    '--link-visited': '#A46DC6',
  },
  virtual: {
    '--fg': '#E20000',
    '--bg': '#1F0202',
    '--link': '#AD1818',
    '--link-active': '#E20000',
    '--link-visited': '#AD1818',
  },
  yinz: {
    '--fg': 'black',
    '--bg': '#FFCD4D',
    '--link': 'blue',
    '--link-active': 'red',
    '--link-visited': 'black',
  },
}

const btnStyles = {
  '-webkit-appearance': 'none',
  background: '#FFB800',
  color: 'black',
  border: 'none',
}

const menuStyles = {
  background: '#FFB800',
  color: 'black',
}

class Opts extends React.Component {
  constructor(props) {
    const d = new Date()

    // Taking a stab at whether or not I think it'll be dark.
    // Obviously very inaccurate, because, you know, maybe they're indoors.
    const darkModeGuess = d.getHours() > 19 || d.getHours() < 8

    super(props)
    this.state = {
      open: false,
      selectedTheme: darkModeGuess ? 'night' : 'normal',
    };
  }

  componentDidMount() {
    if (document) {
      this.documentElement = document.documentElement
    }
    this.setTheme(this.state.selectedTheme)
  }

  componentWillUnmount() {
  }

  toggle = () => {
    this.setState({ open: !this.state.open })
  }

  setTheme = (theme) => {
    const variables = Object.entries(themes[theme])
    variables.forEach(variable => {
      const [ key, value ] = variable

      if (this.documentElement) {
        this.documentElement.style.setProperty(key, value)
      }
    });
  }

  handleChange = (value) => {
    this.setState({selectedTheme: value});
    this.setTheme(value)
  }

  render() {
    return (
      <section>
        <button onClick={this.toggle} aria-expanded={this.state.open.toString()} aria-label="options" style={btnStyles}><Gear />
          Options</button>
        {this.state.open && (
          <div aria-label="options menu" style={menuStyles}>
            <RadioGroup
              name="theme"
              selectedValue={this.state.selectedTheme}
              onChange={this.handleChange}>
              {
                Object.keys(themes).map(t => <label><Radio value={t}/>{t}</label>)
              }
            </RadioGroup>
          </div>
        )}
      </section>
    )
  }
}

export default Opts
