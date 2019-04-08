import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './Notifications.css'
import ReactSwipe from 'nuka-carousel';
import { Entry } from '../MainMenu/MainMenu';

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
    const {
      isRead,
      text,
      index,
      afterSlide,
      markRead,
      source
    } = this.props

    return (
      <ReactSwipe
        withoutControls={true}
        afterSlide={(slideIndex) => {
          if(slideIndex === 1)
            afterSlide(this.props.index)
        }}
      >
        {isRead ? 
          <Link
            to={source}
          >
            <Notification_Entry
              text={text}
              isRead={isRead}
            />
          </Link>
          :
          <Notification_Entry
            text={text}
            isRead={isRead}
            onClick={
              (event) => markRead(index)}
          >
            {text}
          </Notification_Entry>
        }
        <div className={"Notifications-Delete"}>
          DELETE!!!
        </div>
      </ReactSwipe>
    );
  }
}

export const Notification_Entry = ({text, isRead, onClick}) => {
  return(
    <div
        className={"Notifications-Entry"}
        style={{backgroundColor: isRead ? 'white' : 'gray'}}
        onClick={onClick}
      >
        {text}
      </div>
  );
} 