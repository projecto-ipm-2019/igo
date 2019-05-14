import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

import NotificationEntry from './NotificationEntry'

import {List, Typography} from "@material-ui/core";

const styles = theme => ({
  root: {
    height: "45mm",
    width: "45mm",
    overflowY: "auto"
  },
  header: {
    backgroundColor: theme.palette.primary.main,
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
      <div
        className={classes.root}
      >
        <header
          className={classes.header}
        >
          <Typography
            color={"textSecondary"}
            variant={"h6"}
          >
            Notifications
          </Typography>
        </header>
        <main>
          <List disablePadding>
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