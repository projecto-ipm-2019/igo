import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import "./iGo.css"
import { MainMenu } from "../MainMenu/MainMenu";
import Friends from "../Friends/Friends";
import Events from "../Events/Events";
import Notifications from "../Notifications/Notifications";

// Resources
import logo from "./Resources/iGOlogo.jpg"
import { notificationsList } from "./Resources/notificationsList";
import homeImg from "./Resources/home.svg"
import returnImg from "./Resources/return.svg"

global.hasNewNotif=0;

for (let n in notificationsList){
	if(!notificationsList[n].isRead){
		global.hasNewNotif++;
	}
}

export default class iGo extends Component {
  notifications = notificationsList;


  render() {
    return(
      <Router>
        <div className={"iGo"}>
          <Switch>
            <Route exact path={"/"} component={InitialScreen}/>
            <Route path={"/igo"}>
              <h1>
                Press HOME to turn ON!
              </h1>
            </Route>
            <Route path={"/Menu"} component={MainMenu}/>
            <Route path={"/Friends"} component={Friends}/>
            <Route path={"/Events"} component={Events}/>
            <Route path={"/Notifications"}>
              <Notifications
                notifications={this.notifications}
              />
            </Route>
          </Switch>
        </div>
        <Route path={"/"} component={ButtonContainer}/>
      </Router>
    );
  }
}

export class InitialScreen extends Component {
  render() {
    return(
      <div className={"iGo-InitialScreen"}>
        <Link to={"/Menu"}>
          <input
            type={"image"}
            alt={"logo"}
            src={logo}
            className={"App-logo"}
          />
        </Link>
      </div>
    );
  }
}

export class ButtonContainer extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
    if(this.props.location.pathname !== "/igo/" && this.props.location.pathname !== "/")
      this.props.history.goBack();
  }

  render() {
    console.debug("Button Container Props: ", this.props);

    return (
      <div className={"Button-container"}>
        <Link to={"/"}>
          <button>
            <img src={homeImg} alt="home" width="31.9" />
          </button>
        </Link>
        <button onClick={this.goBack}>
            <img src={returnImg} alt="return" width="31.9" />
        </button>
      </div>
    )
  }
}