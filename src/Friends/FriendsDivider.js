import React from 'react';
import {Divider} from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  divider:{
    backgroundColor: "rgba(0, 0, 0, 1)"
  }
};

function FriendsDivider(props) {
  const {
    classes
  } = props;
  return(
    <Divider
      className={classes.divider}
    />
  );
}

export default withStyles(styles)(FriendsDivider);