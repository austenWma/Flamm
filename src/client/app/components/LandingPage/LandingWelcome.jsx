import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import IconButton from 'material-ui/IconButton';
import Dehaze from 'material-ui/svg-icons/image/dehaze';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme.js';

import $ from 'jquery'

const muiTheme = getMuiTheme({
    ripple: {
        color: 'blue',
    },
});

class LandingWelcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
        
      };
  }

  componentDidMount() {
        $(".landingWelcomeTabsContainer").animate({
            height: "toggle",
            opacity: "toggle"
        }, 0);
        $('.landingWelcomeMenuButton').click(() => {
            $(".landingWelcomeTabsContainer").animate({
                height: "toggle",
                opacity: "toggle"
            }, 300);
        });

        $(".landingWelcomeTab").hover(() => {
            $(this).animate({
                borderBottom: '2px solid white',
            }, 250);
        });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
        <div className="landingWelcomeTabBarContainer">
            <div className="landingWelcomeTitle">
                F L A M M
            </div>
            <div className="landingWelcomeTabsContainer">
                <div className="landingWelcomeTab">
                    About
                </div>
                <div className="landingWelcomeTab">
                    How it Works
                </div>
                <div className="landingWelcomeTab">
                    The Team
                </div>
                <div className="landingWelcomeTab">
                    Contact
                </div>
            </div>
            <div className="landingWelcomeMenuButton">
                <IconButton iconStyle={{width: '75', height: '75'}} style={{width: '120', height: '120'}}>
                    <Dehaze />
                </IconButton> 
            </div>
        </div>
        </MuiThemeProvider>
        <div className="landingWelcomeContentContainer">
            <div className="landingWelcomeContentPictureContainer">
                <div className="landingWelcomeContentCaption">
                    Your Studio, In the Cloud
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default LandingWelcome;