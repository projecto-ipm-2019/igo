import withStyles from "@material-ui/core/styles/withStyles";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";

import {pathRoot} from "../iGo/iGo";

const styles = theme => ({
  root:{
    paddingRight: 0,
    paddingLeft: 0
  },
  item: {
    paddingRight: 0,
  },
  link: {
    textDecoration: "none"
  }
});

function EventsEntry(props) {
  const {
    event,
    classes,
    to
  } = props;

  return(
    <Link
      to={to === undefined ? pathRoot + "/Event/" + event.id : to}
      className={classes.link}
    >
      <ListItem className={ classes.root } button divider>
        <ListItemAvatar>
          <Avatar alt={ event.name } src={ event.photoAlbum.length > 0 ? event.photoAlbum[0] : "" }/>
        </ListItemAvatar>
        <ListItemText primary={ event.name } className={ classes.item }/>
      </ListItem>
    </Link>
  );
}

export default withStyles(styles)(EventsEntry)