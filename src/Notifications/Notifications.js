import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './Notifications.css'
import ReactSwipe from 'nuka-carousel';

export default class extends Component {
  constructor(props) {
    super(props);
    this.afterSlide = this.afterSlide.bind(this);
    this.markRead = this.markRead.bind(this);
  }

  markRead(notificationIndex) {
    if (!this.props.notifications[notificationIndex].isRead) {
      this.props.notifications[notificationIndex].isRead = true;
      this.setState({
        latestReadNotificationIndex: notificationIndex
      });
    }
  }

  afterSlide = (notificationIndex) => {
    this.setState({
      lastRemovedNotification: this.props.notifications.splice(notificationIndex, 1)[0]
    });
  };

  render() {
    return(
      <div>
        <header className={"Notifications-Title"}>
          Notifications
        </header>
        <main>
          <div className={"Notifications"}>
            {this.props.notifications.map( (notification, index) => (
              <Notification
                isRead={notification.isRead}
                text={notification.text}
                key={notification.text + index.toString()}
                index={index}
                afterSlide={this.afterSlide}
                markRead={this.markRead}
                source={notification.source}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export class Notification extends Component {
  render() {
    return (
      <ReactSwipe
        withoutControls={true}
        afterSlide={(slideIndex) => {
          if(slideIndex === 2)
            this.props.afterSlide(this.props.index)
        }}
      >
        <div
          className={"Notifications-Entry"}
          style={{backgroundColor: this.props.isRead ? 'white' : 'gray'}}
          onClick={(event) => this.props.markRead(this.props.index)}
        >
          {this.props.text}
        </div>
        <div className={"Notifications-Open"}>
          <Link to={this.props.source}>
              <div>
                  OPEN
              </div>
          </Link>
        </div>
        <div className={"Notifications-Delete"}>
          DELETE!!!
        </div>
      </ReactSwipe>
    );
  }
}