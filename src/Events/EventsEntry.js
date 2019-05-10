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
    text: {
      paddingRight: 0,
    }
  }
});

function EventsEntry(props) {
  const {
    event,
    classes
  } = props;

  return(
    <Link to={pathRoot + "/Event/" + event.id}>
      <ListItem className={ classes.root } button>
        <ListItemAvatar>
          <Avatar alt={ event.name } src={ event.photoAlbum.length > 0 ? event.photoAlbum[0] : "" }/>
        </ListItemAvatar>
        <ListItemText primary={ event.name } className={ classes.item.text }/>
      </ListItem>
    </Link>
  );
}

export default withStyles(styles)(EventsEntry)