import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {Divider, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {pathRoot} from "../iGo/iGo";
import ReactSwipe from 'nuka-carousel';

const styles = theme => ({
  readNotification: {
    backgroundColor: "white"
  },
  unreadNotifications: {
    backgroundColor: "grey"
  },
  entry: {}
});

function NotificationText({text, isRead, onClick, classes}) {
  return(
    <ListItemText
      primary={text}
      className={isRead? classes.readNotification : classes.unreadNotifications}
    />
  )
}

function NotificationEntry({index, notification, markRead, afterSlide, classes}) {
  return (
    <ListItem
      className={classes.entry}
    >
      <ReactSwipe
        withoutControls={true}
        afterSlide={(slideIndex) => {
          if(slideIndex === 1)
            afterSlide(index)
        }}
      >
        {notification.isRead ?
          <Link
            to={pathRoot + notification.source}
          >
            <NotificationText
              text={notification.text}
              isRead={notification.isRead}
              classes={classes}
            />
          </Link>
          :
          <NotificationText
            text={notification.text}
            isRead={notification.isRead}
            onClick={
              (event) => markRead(index)}
            classes={classes}
          />
        }
        <DeleteForeverIcon
          className={classes.entry}
        />
      </ReactSwipe>
      <Divider/>
    </ListItem>
  );
}

export default withStyles(styles)(NotificationEntry)