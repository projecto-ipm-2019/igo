import React, {Component} from 'react'
import './Friends.css'
import ReactSwipe from 'nuka-carousel';
import {Link, Route, Switch} from "react-router-dom";

import qr from './Resources/qr--igo.svg'
import {pathRoot} from "../iGo/iGo";
import {Avatar, Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Contacts, LocationOn, RecentActors, Search, SortByAlpha, Stars} from "@material-ui/icons";

import FriendsDivider from './FriendsDivider'

export default class extends Component {
  state = {
    currentSlide: 0,
    sortFriendsIndex: 0,
    sortFindIndex: 0,
  };

  updateSortFriendsIndex = (index) => {
    this.setState({sortFriendsIndex: index});
    this.props.history.goBack();
  };

  updateSortFindIndex = (index) => {
    this.setState({sortFindIndex: index});
    this.props.history.goBack();
  };


  render() {
    const {
      profiles
    } = this.props;

    console.debug("Props", this.props);

    return(
      <div>
        <Switch>
          <Route
            exact path={this.props.match.url}
            render={() =>
              <ReactSwipe
                withoutControls={true}
                slideIndex={this.state.currentSlide}
                afterSlide={(slideIndex) => this.setState({currentSlide: slideIndex})}
              >
                <FriendsMain
                  {...this.props}
                  profiles={profiles}
                  sortFriendsIndex={this.state.sortFriendsIndex}
                />
                <FriendsFind
                  {...this.props}
                  sortFindIndex={this.state.sortFindIndex}
                  profiles={profiles}
                />
                <FriendsPending
                  profiles={profiles}
                />
                <FriendsQR/>
              </ReactSwipe>
            }
          />
          <Route
            exact path={this.props.match.url + "/sort"}
            render={(props) =>
              <SortFriends
                sortFriendsIndex={this.state.sortFriendsIndex}
                sortFindIndex={this.state.sortFindIndex}
                updateSortFriendsIndex={this.updateSortFriendsIndex}
                updateSortFindIndex={this.updateSortFindIndex}
                currentSlide={this.state.currentSlide}
              />
            }
          />
        </Switch>
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
          <Link to={this.props.match.url + "/sort"}>
            Your Friends
            <div>
            {this.props.sortFriendsIndex === 0 ?
              <RecentActors />
              :
              this.props.sortFriendsIndex === 1 ?
                <LocationOn />
                :
                this.props.sortFriendsIndex === 2 ?
                  <SortByAlpha />
                  :
                  ""
            }
            </div>
            <Divider/>
          </Link>
        </header>
        <main>
          {profiles.filter((profile) => (
            profile.friendshipStatus.isFriend
          )).sort((p1, p2) => {
              if(this.props.sortFriendsIndex === 0)
                return p2.recent - p1.recent;
              if(this.props.sortFriendsIndex === 1)
                return p1.location.distance - p2.location.distance;
              if(this.props.sortFriendsIndex === 2)
                if(p1.name < p2.name)
                  return -1;
                if(p1.name > p2.name)
                  return 1;
              return 0
            }
          ).map((profile) => (
            <FriendsEntry
              key={profile.id}
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
          <Link to={this.props.match.url + "/sort"}>
            Find
            <div>
              {this.props.sortFindIndex === 0 ?
                <Stars />
                :
                this.props.sortFindIndex === 1 ?
                  <LocationOn />
                  :
                  this.props.sortFindIndex === 2 ?
                    <Contacts />
                    :
                    this.props.sortFindIndex === 3 ?
                      <Search />
                      :
                      ""
              }
            </div>
            <Divider/>
          </Link>
        </header>
        <main>
          {profiles.filter((profile) => {
            if(this.props.sortFindIndex === 2)
              return !profile.friendshipStatus.isFriend && profile.isContact;
            return !profile.friendshipStatus.isFriend;
          }).sort((p1, p2) => {
              if(this.props.sortFindIndex === 0)
                return p2.recommend - p1.recommend;
              if(this.props.sortFindIndex === 1)
                return p1.location.distance - p2.location.distance;
              return 0
            }
          ).map((profile) => (
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
          <FriendsDivider/>
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
            <Divider/>
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
    <Link to={pathRoot + "/Profile/" + profile.id}>
      {profile.name}
    </Link>
    {profile.photo ?
      <Avatar
        src={profile.photo}
        alt={"Profile"}
      />
      :
      <Avatar>
        {profile.name[0]}
      </Avatar>
    }
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
            src={qr}
            alt={"QR Code"}
          />
        </main>
      </div>
    );
  }
}

export class SortFriends extends Component {
  render() {
    const {
      currentSlide
    } = this.props;
    return (
      <div>
        {currentSlide === 0 ?
          <SortMain {...this.props}/>
          :
          <SortFind {...this.props}/>
        }
      </div>
    )
  }
}

export class SortMain extends Component {
  render() {
    return (
      <div>
        <header>
          Sort Friends
          <Divider/>
        </header>
        <main>
          <List>
            <ListItem
              button
              selected={this.props.sortFriendsIndex === 0}
              onClick={event => this.props.updateSortFriendsIndex(0)}
            >
              <ListItemIcon>
                <RecentActors />
              </ListItemIcon>
              <ListItemText primary="Recent" />
            </ListItem>
            <ListItem
              button
              selected={this.props.sortFriendsIndex === 1}
              onClick={event => this.props.updateSortFriendsIndex(1)}
            >
              <ListItemIcon>
                <LocationOn />
              </ListItemIcon>
              <ListItemText primary="Nearby" />
            </ListItem>
            <ListItem
              button
              selected={this.props.sortFriendsIndex === 2}
              onClick={event => this.props.updateSortFriendsIndex(2)}
            >
              <ListItemIcon>
                <SortByAlpha />
              </ListItemIcon>
              <ListItemText primary="Alphabetic" />
            </ListItem>
          </List>
        </main>
      </div>
    );
  }
}

export class SortFind extends Component{
  render() {
    return (
      <div>
        <header
          className={"Header"}
        >
          Sort Find
          <Divider/>
        </header>
        <main>
          <div
            className={"Friends-Sort-Find"}
          >
            <List>
              <ListItem
                button
                selected={this.props.sortFindIndex === 0}
                onClick={event => this.props.updateSortFindIndex(0)}
              >
                <ListItemIcon>
                  <Stars />
                </ListItemIcon>
                <ListItemText primary="Recommend" />
              </ListItem>
              <ListItem
                button
                selected={this.props.sortFindIndex === 1}
                onClick={event => this.props.updateSortFindIndex(1)}
              >
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText primary="Nearby" />
              </ListItem>
              <ListItem
                button
                selected={this.props.sortFindIndex === 2}
                onClick={event => this.props.updateSortFindIndex(2)}
              >
                <ListItemIcon>
                  <Contacts />
                </ListItemIcon>
                <ListItemText primary="Contacts" />
              </ListItem>
              <ListItem
                button
                selected={this.props.sortFindIndex === 3}
                onClick={event => this.props.updateSortFindIndex(3)}
              >
                <ListItemIcon>
                  <Search />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItem>
            </List>
          </div>
        </main>
      </div>
    );
  }
}