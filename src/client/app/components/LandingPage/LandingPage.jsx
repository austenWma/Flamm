import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import LandingWelcome from './LandingWelcome.jsx'

class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
        
      };
  }

  render() {
    return (
      <div>
        <div className="landingWelcomeContainer">
          <LandingWelcome />
        </div>
        <div className="landingDescriptionContainer">
        </div>
      </div>
    )
  }
}

export default LandingPage;