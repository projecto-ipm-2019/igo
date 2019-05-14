import React, {Component} from 'react';
import {Divider, List, ListItem, ListItemText, Typography, withStyles} from "@material-ui/core";
import EventsEntry from '../Events/EventsEntry'

import {ExpandLess, ExpandMore} from "@material-ui/icons";

import ProfileAvatar from "./ProfileAvatar";

import ReactSwipe from 'nuka-carousel';

const styles = theme => ({
  root: {
    height: "45mm",
    width: "45mm",
    overflowY: "scroll",
  },
  listItemTextAccept: {
    backgroundColor: "green",
  },
  listItemTextReject: {
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    textDecoration: "none"
  },
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
      events,
      match,
      classes
    } = this.props;

    this.profileIndex = profiles.findIndex((profile) =>
        profile.id.toString() === match.params.userId
    );

    this.profile = profiles.find((profile) =>
      profile.id.toString() === match.params.userId
    );

    console.debug("Profile", this.profile);

    return (this.profileIndex !== -1 ?
      <div className={classes.root}>
        <ProfileAvatar
          profile={profiles[this.profileIndex]}
        />
        <Typography>
          {profiles[this.profileIndex].name}
        </Typography>
        <Divider/>
        <List disablePadding>
          {profiles[this.profileIndex].friendshipStatus.isFriend ?
            <ListItem
              button
              onClick={this.switchFriendshipStatus}
            >
              <ListItemText>
                <Typography
                  variant={"body1"}
                  align={"center"}
                >
                  Unfriend
                </Typography>
              </ListItemText>
            </ListItem>
            :
            profiles[this.profileIndex].friendshipStatus.isRequest ?
              <ReactSwipe
                withoutControls={true}
                afterSlide={(slideIndex) => {
                  if(slideIndex === 0)
                    this.acceptFriendRequest();
                  if(slideIndex === 2)
                    this.declineFriendRequest();
                }}
                slideIndex={1}
              >
                <ListItem
                  component={"span"}
                  className={classes.listItemTextAccept}
                >
                  <ListItemText>
                    <Typography
                      variant={"body1"}
                      align={"center"}
                    >
                      ACCEPT
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem
                  component={"span"}
                >
                  <ListItemText>
                    <Typography
                      variant={"body1"}
                      align={"center"}
                    >
                      Requesting...
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem
                  component={"span"}
                  className={classes.listItemTextReject}
                >
                  <ListItemText>
                    <Typography
                      variant={"body1"}
                      align={"center"}
                    >
                      DECLINE
                    </Typography>
                  </ListItemText>
                </ListItem>
              </ReactSwipe>
              :
              profiles[this.profileIndex].friendshipStatus.isPending ?
                <ListItem
                  button
                  onClick={this.switchFriendshipStatus}
                >
                  <ListItemText>
                    <Typography
                      variant={"body1"}
                      align={"center"}
                    >
                      Pending...
                    </Typography>
                  </ListItemText>
                </ListItem>
                :
                <ListItem
                  button
                  onClick={this.switchFriendshipStatus}
                >
                  <ListItemText>
                    <Typography
                      variant={"body1"}
                      align={"center"}
                    >
                      Add to Friends
                    </Typography>
                  </ListItemText>
                </ListItem>
          }
          <Divider/>
          {profiles[this.profileIndex].friendshipStatus.isFriend ?
            <React.Fragment>
              <ListItem
                button
                divider
                onClick={(event) =>
                  this.setState({isEventsOpen: !this.state.isEventsOpen})
                }
              >
                <ListItemText>
                  <Typography
                    variant={"body1"}
                    align={"center"}
                  >
                    Events
                  </Typography>
                </ListItemText>
                {this.state.isEventsOpen ? <ExpandLess/> : <ExpandMore/>}
              </ListItem>
              <List disablePadding>
                {this.state.isEventsOpen ?
                  this.profile.events.length === 0 ?
                    <ListItem
                      divider
                    >
                      <ListItemText>
                        <Typography
                          variant={"body1"}
                          align={"left"}
                        >
                          No Events to show
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    :
                    this.profile.events.map(eventId =>
                      <EventsEntry
                        key={eventId}
                        event={events.find(event => event.id === eventId)}
                      />
                    )
                  :
                  ""
                }
              </List>
              <ListItem
                button
                onClick={(event) =>
                  this.setState({isPostsOpen: !this.state.isPostsOpen})
                }
              >
                <ListItemText>
                  <Typography
                    variant={"body1"}
                    align={"center"}
                  >
                    Posts
                  </Typography>
                </ListItemText>
                {this.state.isPostsOpen ? <ExpandLess/> : <ExpandMore/>}
              </ListItem>
              <Divider/>
              <List
                disablePadding
              >
                {this.state.isPostsOpen ?
                  profiles[this.profileIndex].posts.length === 0 ?
                    <ListItem>
                      <ListItemText>
                        <Typography
                          variant={"body1"}
                          align={"center"}
                        >
                          No Posts to show
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    :
                    profiles[this.profileIndex].posts.map((post, index) =>
                      <ListItem
                        key={index}
                      >
                        <ListItemText>
                          <Typography
                            variant={"body1"}
                            align={"left"}
                          >
                            {post}
                          </Typography>
                        </ListItemText>
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
      </div>
      :
      <div>
        The profile you were looking for doesn't exist or was deleted.
      </div>
    );
  }
}

export default withStyles(styles)(Profile)