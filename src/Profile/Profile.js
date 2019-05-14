import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {createStyles, Divider, List, ListItem, ListItemText, withStyles} from "@material-ui/core";

import {ExpandLess, ExpandMore} from "@material-ui/icons";

import '../Friends/Friends.css';

import ProfileAvatar from "./ProfileAvatar";

import ReactSwipe from 'nuka-carousel';
import {pathRoot} from "../iGo/iGo";

const styles = createStyles({
  root: {
    height: "45mm",
    overflowY: "scroll",
  },
  listItem: {
    paddingRight: 0,
    paddingLeft: 0
  },
  listItemText: {
    paddingRight: 0,
    textAlign: "center"
  },
  listItemTextAccept: {
    backgroundColor: "green",
    paddingRight: 0,
    textAlign: "center"
  },
  listItemTextReject: {
    backgroundColor: "red",
    paddingRight: 0,
    textAlign: "center"
  }
});

class Profile extends Component {
  state = {
    isPostsOpen: false,
    isEventsOpen: false
  };

  constructor(props) {
    super(props);
    this.switchFriendshipStatus = this.switchFriendshipStatus.bind(this);
    this.acceptFriendRequest = this.acceptFriendRequest.bind(this);
    this.declineFriendRequest = this.declineFriendRequest.bind(this);
  }

  switchFriendshipStatus(event) {
    const { profiles } = this.props;
    const { friendshipStatus } = profiles[this.profileIndex];
    if(!friendshipStatus.isPending && !friendshipStatus.isRequest) {
      if(friendshipStatus.isFriend) {
        profiles[this.profileIndex].friendshipStatus.isFriend = false;
        profiles[this.profileIndex].recent = 0;
        profiles[this.profileIndex].recommend = 0;
      }
      else {
        this.props.createFriendRequest(profiles[this.profileIndex].id);
        profiles[this.profileIndex].friendshipStatus.isPending = true;
      }
      this.setState({
        previousFriendshipStatus: friendshipStatus
      })
    }
  }

  acceptFriendRequest() {
    const { profiles } = this.props;
    const { friendshipStatus } = profiles[this.profileIndex];

    profiles[this.profileIndex].friendshipStatus = {
      isFriend: true,
      isPending: false,
      isRequest: false,
    };

    profiles[this.profileIndex].recent = 100;

    this.setState({
      previousFriendshipStatus: friendshipStatus
    })
  }

  declineFriendRequest() {
    const { profiles } = this.props;
    const { friendshipStatus } = profiles[this.profileIndex];

    profiles[this.profileIndex].friendshipStatus = {
      isFriend: false,
      isPending: false,
      isRequest: false,
    };

    profiles[this.profileIndex].recent = 0;
    profiles[this.profileIndex].recommend = 0;

    this.setState({
      previousFriendshipStatus: friendshipStatus
    })
  }

  render() {
    const {
      profiles,
      match,
      classes
    } = this.props;

    this.profileIndex = profiles.findIndex((profile) =>
        profile.id.toString() === match.params.userId
    );

    console.debug("Profile", profiles[this.profileIndex]);

    //TODO: Make Events a nested list with the profile events

    return (
      <React.Fragment>
        {this.profileIndex !== -1 ?
          <List
            className={classes.root}
            disablePadding
          >
            <ListItem>
              <ProfileAvatar
                profile={profiles[this.profileIndex]}
              />
            </ListItem>
            <Divider/>
            <ListItem
              className={classes.listItem}
            >
              <ListItemText
                className={classes.listItemText}
                primary={profiles[this.profileIndex].name}

              />
            </ListItem>
            <Divider/>
            <ListItem
              className={classes.listItem}
              button
              onClick={this.switchFriendshipStatus}
            >
              {profiles[this.profileIndex].friendshipStatus.isFriend ?
                <ListItemText
                  primary={"Unfriend"}
                  className={classes.listItemText}
                />
                :
                profiles[this.profileIndex].friendshipStatus.isRequest ?
                  <ReactSwipe
                    withoutControls={true}
                    afterSlide={(slideIndex) => {
                      if(slideIndex === 0)
                        this.acceptFriendRequest()
                      if(slideIndex === 2)
                        this.declineFriendRequest()
                    }}
                    slideIndex={1}
                  >
                    <ListItemText
                      primary={"ACCEPT"}
                      className={classes.listItemTextAccept}
                    />
                    <ListItemText
                      primary={"Requesting..."}
                      className={classes.listItemText}
                    />
                    <ListItemText
                      primary={"DECLINE"}
                      className={classes.listItemTextReject}
                    />
                  </ReactSwipe>
                  :
                  profiles[this.profileIndex].friendshipStatus.isPending ?
                    <ListItemText
                      primary={"Pending..."}
                      className={classes.listItemText}
                    />
                    :
                    <ListItemText
                      primary={"Add to Friends"}
                      className={classes.listItemText}
                    />
              }
            </ListItem>
            <Divider/>
            {profiles[this.profileIndex].friendshipStatus.isFriend ?
              <React.Fragment>
                <Link to={pathRoot + "/Events/"}>
                  <ListItem
                    button
                    className={classes.listItem}
                  >
                    <ListItemText
                      primary={"Events"}
                      className={classes.listItemText}
                    />
                  </ListItem>
                </Link>
                <Divider/>
                <ListItem
                  button
                  onClick={(event) =>
                    this.setState({isPostsOpen: !this.state.isPostsOpen})
                  }
                  className={classes.listItem}
                >
                  <ListItemText
                    primary={"Posts"}
                    className={classes.listItemText}
                  />
                  {this.state.isPostsOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Divider/>
                <List
                  disablePadding
                >
                  {this.state.isPostsOpen ?
                    profiles[this.profileIndex].posts.length === 0 ?
                      <ListItem
                        className={classes.listItem}
                      >
                        <ListItemText
                          className={classes.listItemText}
                          primary={"No Posts to show"}
                        />
                      </ListItem>
                      :
                      profiles[this.profileIndex].posts.map((post, index) =>
                        <ListItem
                          className={classes.listItem}
                          key={index}
                        >
                          <ListItemText
                            className={classes.listItemText}
                            primary={post}
                          />
                        </ListItem>
                      )
                    :
                    ""
                  }
                </List>
              </React.Fragment>
              :
              ""
            }
          </List>
          :
          <div>
            The profile you were looking for doesn't exist or was deleted.
          </div>
        }
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Profile)