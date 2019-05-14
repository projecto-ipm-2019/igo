import {Link} from "react-router-dom";
import logo from "./Resources/iGOlogo.jpg";
import React from "react";
import {pathRoot} from "./iGo";

import {withStyles} from "@material-ui/core";

const styles = theme => ({
});

function InitialScreen({classes}) {
  return(
    <div className={"iGo-InitialScreen"}>
      <Link to={pathRoot + "/Menu"}>
        <input
          type={"image"}
          alt={"logo"}
          src={logo}
          className={"App-logo"}
        />
      </Link>
    </div>
  );
}

export default withStyles(styles)(InitialScreen)