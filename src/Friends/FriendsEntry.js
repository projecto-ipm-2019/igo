import {Link} from "react-router-dom";
import {pathRoot} from "../iGo/iGo";
import {Avatar, withStyles} from "@material-ui/core";
import React from "react";

const styles = theme => ({
});

function FriendsEntry({profile, classes}) {
  return(
    <div className={"Friends-Entry"}>
      <Link to={pathRoot + "/Profile/" + profile.id}>
        {profile.name}
      </Link>
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
    </div>
  );
}

export default withStyles(styles)(FriendsEntry)