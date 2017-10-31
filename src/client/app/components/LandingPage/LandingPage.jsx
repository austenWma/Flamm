import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingWelcome from './LandingWelcome.jsx'
import LandingMenuBar from './LandingMenuBar.jsx'

import $ from 'jquery'

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
    };
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    $('.landingMenuBar').hide()
  }

  toggleMenu() {
    $('.landingMenuBar').slideToggle(500)
  }

  render() {
    return (
      <div>
        <div className="landingWelcomeContainer">
          <div className="landingMenuBar">
            <LandingMenuBar />
          </div>
          <LandingWelcome toggleMenu={this.toggleMenu}/>
        </div>
        <div className="landingDescriptionContainer">
        </div>
      </div>
    )
  }
}

export default LandingPage;