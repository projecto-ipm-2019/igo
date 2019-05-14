import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {pathRoot} from "../iGo/iGo";
import ReactSwipe from 'nuka-carousel';

const styles = theme => ({
  readNotification: {
    padding: 0,
    height: "15mm",
    backgroundColor: theme.palette.background.default
  },
  unreadNotifications: {
    padding: 0,
    height: "15mm",
    backgroundColor: theme.palette.action.disabledBackground
  },
  link: {
    textDecoration: "none"
  },
  deleteNotification: {
    height: "15mm",
    backgroundColor: theme.palette.secondary.main
  }
});

function NotificationEntry({index, notification, markRead, afterSlide, classes}) {
  return (
    <ReactSwipe
      withoutControls={true}
      afterSlide={(slideIndex) => {
        if(slideIndex === 1)
          afterSlide(index)
      }}
      heightMode={"first"}
    >
      {notification.isRead ?
        <Link
          className={classes.link}
          to={pathRoot + notification.source}
        >
          <ListItem
            component={"span"}
            className={notification.isRead?
              classes.readNotification : classes.unreadNotifications
            }
            button
            divider
            alignItems={"flex-start"}
          >
            <ListItemText>
              <Typography>
                {notification.text}
              </Typography>
            </ListItemText>
          </ListItem>
        </Link>
        :
        <ListItem
          component={"span"}
          className={notification.isRead?
            classes.readNotification : classes.unreadNotifications
          }
          button
          divider
          onClick={(event) => markRead(index)}
          alignItems={"flex-start"}
        >
          <ListItemText>
            <Typography>
              {notification.text}
            </Typography>
          </ListItemText>
        </ListItem>
      }
      <ListItem
        divider
        component={"span"}
        className={classes.deleteNotification}
      >
        <ListItemIcon>
          <DeleteForeverIcon/>
        </ListItemIcon>
      </ListItem>
    </ReactSwipe>
  );
}

export default withStyles(styles)(NotificationEntry)