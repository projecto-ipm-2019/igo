import qr from "./Resources/qr--igo.svg";
import React from "react";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
  root: {
    height: "45mm"
  },
  header: {
    backgroundColor: "#4267b2",
    color: "white"
  },
  image: {
    maxHeight: "40mm",
    maxWidth: "40mm"
  }
});

function FriendsQR({classes}) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        Add me QR
      </header>
      <main>
        <img
          className={classes.image}
          src={qr}
          alt={"QR Code"}
        />
      </main>
    </div>
  );
}

export default withStyles(styles)(FriendsQR)