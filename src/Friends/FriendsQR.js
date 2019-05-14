import React from "react";
import {Typography, withStyles} from "@material-ui/core";
import QRCode from 'qrcode.react';
import uuid4 from 'uuid/v4';

const styles = theme => ({
  root: {
    width: "45mm",
    height: "45mm",
  },
  header: {
    backgroundColor: theme.palette.primary.main
  },
  image: {
    maxHeight: "40mm",
    maxWidth: "40mm"
  },
  main: {
    marginTop: 5
  }
});

function FriendsQR({classes}) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography
          variant={"h6"}
          color={"textSecondary"}
        >
          Add me QR
        </Typography>
      </header>
      <main className={classes.main}>
        <QRCode value={uuid4()}/>
      </main>
    </div>
  );
}

export default withStyles(styles)(FriendsQR)