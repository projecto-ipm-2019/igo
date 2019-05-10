import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './Friends.css';

import ReactSwipe from 'nuka-carousel';
import {pathRoot} from "../iGo/iGo";
import ProfileAvatar from "./ProfileAvatar"

export default class extends Component {
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
      match
    } = this.props;

    this.profileIndex = profiles.findIndex((profile) =>
        profile.id.toString() === match.params.userId
    );

    console.debug("Profile", profiles[this.profileIndex]);

    return (
      <div>
        {this.profileIndex !== -1 ?
          <div className={"Profile"}>
            <ProfileAvatar
              profile={profiles[this.profileIndex]}
            />
            <div className={"Profile-List"}>
              <div>
                {profiles[this.profileIndex].name}
              </div>
              <div
                onClick={this.switchFriendshipStatus}
              >
                {profiles[this.profileIndex].friendshipStatus.isFriend ?
                  "Unfriend"
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
                      <div
                        style={{backgroundColor: "green"}}
                      >
                        ACCEPT
                      </div>
                      <div>
                        Requesting...
                      </div>
                      <div
                        style={{backgroundColor: "red"}}
                      >
                        DECLINE
                      </div>
                    </ReactSwipe>
                    :
                    profiles[this.profileIndex].friendshipStatus.isPending ?
                      "Pending..."
                      :
                      "Add to Friends"
                }
              </div>
              <div>
              {profiles[this.profileIndex].friendshipStatus.isFriend ?
                <div>
                  <div>
                    <Link to={pathRoot + "/Events/"}>
                      Events
                    </Link>
                  </div>
                  <div>
                    <div onClick={(event) =>
                      this.setState({isPostsOpen: !this.state.isPostsOpen})
                    }>
                      Posts
                    </div>
                    <div>
                      {this.state.isPostsOpen ?
                        profiles[this.profileIndex].posts.map((post, index) =>
                          <div
                            key={index}
                          >
                            {post}
                          </div>
                        )
                        :
                        ""
                      }
                    </div>
                  </div>
                </div>
                :
                ""
              }
              </div>
            </div>
          </div>
          :
          <div>
            The profile you were looking for doesn't exist or was deleted.
          </div>
        }
      </div>
    );
  }
}