import {Link} from "react-router-dom";
import logo from "./Resources/iGOlogo.jpg";
import React from "react";
import {pathRoot} from "./iGo";

import {withStyles} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "45mm",
    height: "45mm",
    overflow: "hidden",
  },
  logo: {
    margin: "3mm",
    width: "39mm",
    height: "39mm",
  }
});

function InitialScreen({classes}) {
  return(
    <Link to={pathRoot + "/Menu"}>
      <div
        className={classes.root}
      >
        <input
          type={"image"}
          alt={"logo"}
          src={logo}
          className={classes.logo}
        />
      </div>
    </Link>
  );
}

export default withStyles(styles)(InitialScreen)