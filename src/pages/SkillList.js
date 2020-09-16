import React from "react"

import skills from "../data/skills"
import shuffle from "../lib/shuffle"

class SkillList extends React.Component {
  constructor (props) {
    super(props)
    this.numItems = 27;
    this.state = { links: shuffle(skills) }
  }

  shuffleList() {
    this.setState({ links: shuffle(skills) })
  }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.shuffleList(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <ul style={{minWidth: '10rem'}} aria-label={`a big list of ${this.numItems} items, the items are shuffling every second`} onClick={this.shuffleList.bind(this)} className="dash-list">
        {
          this.state.links.slice(0,this.numItems).map(i => (
              <li>{i}</li>
          ))
        }
      </ul>
    )
  }
}

export default SkillList;
