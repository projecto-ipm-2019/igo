import React, { Component } from 'react'
import './Notifications.css'

export default class extends Component {
  notifications = [
    {
      text: "Already read notification!",
      isRead: true
    },
    {
      text: "Unread notification.",
      isRead: false
    },
    {
      text: "Already read notification! 2",
      isRead: true
    },
    {
      text: "Unread notification. 2",
      isRead: false
    },
    {
      text: "Already read notification! 1",
      isRead: true
    },
    {
      text: "Unread notification. 1",
      isRead: false
    }
  ];

  render() {
    return(
      <div>
        <header className={"Notifications-Title"}>
          Notifications
        </header>
        <main>
          <div className={"Notifications"}>
            {this.notifications.map( (notification) => (
              <Notification
                isRead={notification.isRead}
                text={notification.text}
                key={notification.text}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export class Notification extends Component {
  constructor(props) {
    super(props);
    this.markRead = this.markRead.bind(this);
  }

  state = {
    isRead: this.props.isRead,
  };

  markRead(event) {
    event.stopPropagation();
    if(!this.state.isRead)
      this.setState({isRead: true});
  }

  render() {
    return (
      <div
        className="Notifications-Entry"
        style={{backgroundColor: this.state.isRead ? 'white' : 'aqua'}}
        onClick={this.markRead}
      >
        {this.props.text}
      </div>
    );
  }
}