import React, {Component} from 'react';
import {createStyles, withStyles} from '@material-ui/core/styles';

import NotificationEntry from './NotificationEntry'

import {Divider, List} from "@material-ui/core";

const styles = createStyles({
  root: {
    height: "45mm",
    width: "45mm",
    overflowY: "auto"
  }
});

class Notifications extends Component {
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

  afterSlide(notificationIndex) {
    this.setState({
      lastRemovedNotification: this.props.notifications.splice(notificationIndex, 1)[0]
    });
  };

  render() {
    const {
      classes
    } = this.props;

    return(
      <div>
        <header>
          Notifications
          <Divider/>
        </header>
        <main>
          <List
            className={classes.root}
          >
            {this.props.notifications.map(( notification, index ) => (
              <NotificationEntry
                key={notification.id}
                notification={notification}
                index={index}
                markRead={this.markRead}
                afterSlide={this.afterSlide}
              />
            ))}
          </List>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Notifications);