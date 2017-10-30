import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import IconButton from 'material-ui/IconButton';
import Dehaze from 'material-ui/svg-icons/image/dehaze';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme.js';

const muiTheme = getMuiTheme({
    ripple: {
        color: 'white',
    },
});

class LandingWelcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
        
      };
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
        <div className="landingWelcomeTabBarContainer">
            <div className="landingWelcomeTitle">
                F L A M M
            </div>
            <div className="landingWelcomeMenuButton">
                <IconButton iconStyle={{width: '75', height: '75', color: 'white'}} style={{width: '120', height: '120'}}>
                    <Dehaze />
                </IconButton> 
            </div>
        </div>
        </MuiThemeProvider>
        <div>
        </div>
      </div>
    )
  }
}

export default LandingWelcome;