import {withStyles} from "@material-ui/core/styles";
import {Avatar, Grid} from "@material-ui/core";
import React from "react";

const styles = {
  avatar:{
    width: "30mm",
    height: "30mm",
    fontSize: "20mm",
    marginTop: "5mm"
  }
};

function ImageAvatars(props) {
  const {
    classes,
    profile
  } = props;
  return(
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
    >
      {profile.photo?
        <Avatar
          src={profile.photo}
          alt={"Avatar"}
          className={classes.avatar}
        />
        :
        <Avatar
          className={classes.avatar}
        >
          {profile.name[0]}
        </Avatar>
      }
    </Grid>
  );
}

export default withStyles(styles)(ImageAvatars);