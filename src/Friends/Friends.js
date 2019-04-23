import React, { Component } from 'react'
import './Friends.css'
import ReactSwipe from 'nuka-carousel';

import { Link } from "react-router-dom";

import logo from './Resources/logo.svg'
import {pathRoot} from "../iGo/iGo";

export default class extends Component {
  render() {
    const {
      profiles
    } = this.props;

    return(
      <div>
        <ReactSwipe
          withoutControls={true}
        >
          <FriendsMain
            profiles={profiles}
          />
          <FriendsFind
            profiles={profiles}
          />
          <FriendsPending
            profiles={profiles}
          />
          <FriendsQR/>
        </ReactSwipe>
      </div>
    );
  }
}

export class FriendsMain extends Component {
  render() {
    const {
      profiles
    } = this.props;
    return (
      <div className={"Friends"}>
        <header className={"Friends-Title"}>
          Your Friends
        </header>
        <main>
          {profiles.filter((profile) => (
            profile.friendshipStatus.isFriend
          )).map((profile) => (
            <FriendsEntry
              key={profile.name}
              profile={profile}
            />
          ))}
        </main>
      </div>
    );
  }
}

export class FriendsFind extends Component {
  render() {
    const {
      profiles
    } = this.props;
    return (
      <div className={"Friends"}>
        <header className={"Friends-Title"}>
          Find
        </header>
        <main>
          {profiles.filter((profile) => (
            !profile.friendshipStatus.isFriend
          )).map((profile) => (
            <FriendsEntry
              key={profile.name}
              profile={profile}
            />
          ))}
        </main>
      </div>
    );
  }
}

export class FriendsPending extends Component {
  render() {
    const {
      profiles
    } = this.props;
    return (
      <div className={"Friends"}>
        <header className={"Friends-Title"}>
          Pending
        </header>
        <main>
          {profiles.filter((profile) => (
            profile.friendshipStatus.isPending
          )).map((profile) => (
            <FriendsEntry
              key={profile.name}
              profile={profile}
            />
          ))}
          <header className={"Friends-Title"}>
            Requests
          </header>
          <main>
            {profiles.filter((profile) => (
              profile.friendshipStatus.isRequest
            )).map((profile) => (
              <FriendsEntry
                key={profile.name}
                profile={profile}
              />
            ))}
          </main>
        </main>
      </div>
    );
  }
}

export const FriendsEntry = ({profile}) => (
  <div className={"Friends-Entry"}>
    <Link to={pathRoot + "/Friends/" + profile.id}>
      {profile.name}
    </Link>
    <img
      src={profile.photo}
      alt={"Profile"}
    />
  </div>
);

export class FriendsQR extends Component {
  render() {
    return (
      <div className={"Friends-QR"}>
        <header className={"Friends-Title"}>
          Add me QR
        </header>
        <main>
          <img
            src={logo}
            alt={"QR Code"}
          />
        </main>
      </div>
    );
  }
}