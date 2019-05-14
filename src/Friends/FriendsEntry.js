import {Link} from "react-router-dom";
import {pathRoot} from "../iGo/iGo";
import {Avatar, ListItem, ListItemAvatar, ListItemText, withStyles} from "@material-ui/core";
import React from "react";

const styles = theme => ({
  root:{
    paddingRight: 0,
    paddingLeft: 0
  },
  link: {
    textDecoration: "none"
  },
  item: {
    paddingRight: 0,
  }
});

function FriendsEntry({profile, classes}) {
  return(
    <Link
      className={classes.link}
      to={pathRoot + "/Profile/" + profile.id}
    >
      <ListItem className={classes.root} button divider>
        <ListItemAvatar>
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
        </ListItemAvatar>
        <ListItemText primary={profile.name} className={classes.item}/>
      </ListItem>
    </Link>
  );
}

export default withStyles(styles)(FriendsEntry)