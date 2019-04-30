import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';

import "./iGo.css"
import { MainMenu } from "../MainMenu/MainMenu";
import Friends from "../Friends/Friends";
import Events from "../Events/Events";
import Notifications from "../Notifications/Notifications";
import Profile from "../Friends/Profile";

// Resources
import logo from "./Resources/iGOlogo.jpg"
import { notificationsList } from "./Resources/notificationsList";
import { profilesList } from "./Resources/profilesList";
import homeImg from "./Resources/home.svg"
import returnImg from "./Resources/return.svg"


export const pathRoot = "/igo";
global.hasNewNotif=0;

for (let n in notificationsList){
	if(!notificationsList[n].isRead){
		global.hasNewNotif++;
	}
}

export default class iGo extends Component {
  notifications = notificationsList;
  profiles = profilesList;
  state = {
    friendRequests: []
  };

  constructor(props) {
    super(props);
    this.createFriendRequest = this.createFriendRequest.bind(this);
    this.acceptFriendRequest = this.acceptFriendRequest.bind(this);
  }

  createFriendRequest(profileId) {
    this.setState({
      friendRequests: this.state.friendRequests.concat([profileId])
    })
  }

  acceptFriendRequest(profileId) {
    const profileIndex = this.profiles.findIndex((profile) =>
      profile.id === profileId
    );
    this.profiles[profileIndex].friendshipStatus = {
      isFriend: true,
      isPending: false
    };

    this.profiles[profileIndex].recent = 100;

    this.setState({
      friendRequests: this.state.friendRequests.filter((_profileId) =>
        _profileId !== profileId
      )
    })
  }


  render() {
    return(
      <Router>
        <div className={"iGo"}>
          <Switch>
            <Route
              exact path={"/"}
              render={() =>
                <Redirect to={pathRoot}/>
              }
            />
            <Route
              exact path={pathRoot}
              component={InitialScreen}
            />
            <Route
              path={pathRoot + "/Menu"}
              component={MainMenu}
            />
            <Route
              path={pathRoot + "/Friends"}
              render={(props) =>
                <Friends
                  {...props}
                  profiles={this.profiles}
                />
              }
            />
            <Route
              path={pathRoot + "/Events"}
              component={Events}
            />
            <Route
              path={pathRoot + "/Notifications"}
              render={(props) =>
                <Notifications
                  {...props}
                  notifications={this.notifications}
                />
              }
            />
            <Route
              path={pathRoot + "/Profiles/:userId"}
              render={(props) =>
                <Profile
                  {...props}
                  profiles={this.profiles}
                  createFriendRequest={this.createFriendRequest}
                />
              }
            />
          </Switch>
        </div>
        <Route
          path={"/"}
          component={ButtonContainer}
        />
        <Route
          path={"/"}
        >
          <div className={"Button-container"}>
            {this.state.friendRequests.map((profileId) =>
              <button
                key={profileId}
                onClick={() => this.acceptFriendRequest(profileId)}
              >
                Request
                <br/>
                {`(id:${profileId})`}
              </button>
            )}
          </div>
        </Route>
      </Router>
    );
  }
}

export class InitialScreen extends Component {
  render() {
    return(
      <div className={"iGo-InitialScreen"}>
        <Link to={pathRoot + "/Menu"}>
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

  goBack() {
    if(this.props.location.pathname !== pathRoot + "/" && this.props.location.pathname !== "/")
      this.props.history.goBack();
  }

  render() {
    return (
      <div className={"Button-container"}>
        <Link to={pathRoot}>
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