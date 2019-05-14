import React, {Component} from 'react';
import {HashRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';

import MainMenu from "../MainMenu/MainMenu";
import Friends from "../Friends/Friends";
import Events from "../Events/Events";
import Event from "../Event/Event";
import Notifications from "../Notifications/Notifications";
import Profile from "../Profile/Profile";
import InitialScreen from "./InitialScreen"
// Resources
import {notificationsList} from "./Resources/notificationsList";
import {profilesList} from "./Resources/profilesList";
import {eventsList} from "./Resources/eventsList";
import homeImg from "./Resources/home.svg"
import returnImg from "./Resources/return.svg"
import {withStyles} from "@material-ui/core";

export const pathRoot = "/igo";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    width: "45mm",
    height: "45mm",
    overflow: "hidden",
    textAlign: "center"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    "& button": {
      paddingTop: "50%",
      paddingBottom: "50%"
    }
  }
});

class iGo extends Component {
  notifications = notificationsList;
  profiles = profilesList;
  events = eventsList;

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

  unreadNotificationsAmount = () => {
    return this.notifications.reduce((accumulator, currentNotification) =>
      !currentNotification.isRead ? ++accumulator : accumulator, 0)
  };

  render() {
    const {classes} = this.props;

    return(
      <Router>
        <div className={classes.root}>
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
              render={() => <MainMenu profileUnread={this.unreadNotificationsAmount}/>}
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
              render={(props) =>
                <Events
                  {...props}
                  events={this.events}
                />
              }
            />
            <Route
              path={pathRoot + "/Event/:eventId"}
              render={(props) =>
                <Event
                  {...props}
                  events={this.events}
                />
              }
            />
            <Route
              path={pathRoot + "/Notifications"}
              render={(props) =>
                <Notifications
                  {...props}
                  notifications={this.notifications}
                  events={this.events}
                  profiles={this.profiles}
                />
              }
            />
            <Route
              path={pathRoot + "/Profile/:userId"}
              render={(props) =>
                <Profile
                  {...props}
                  profiles={this.profiles}
                  events={this.events}
                  createFriendRequest={this.createFriendRequest}
                />
              }
            />
          </Switch>
        </div>
        <Route
          path={"/"}
          render={(props) =>
            <ButtonContainer
              {...props}
              classes={classes}
            />
          }
        />
        <Route
          path={"/"}
        >
          <div className={classes.buttonContainer}>
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

class ButtonContainer extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    if(this.props.location.pathname !== pathRoot + "/" && this.props.location.pathname !== "/")
      this.props.history.goBack();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.buttonContainer}>
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

export default withStyles(styles)(iGo)