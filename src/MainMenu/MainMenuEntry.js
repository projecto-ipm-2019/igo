import React from 'react';
import {Link} from "react-router-dom";
import {Badge, IconButton, Typography, withStyles} from "@material-ui/core";

import {pathRoot} from "../iGo/iGo";

const styles = theme => ({
  container: {
    height: "45mm"
  },
  icon: {
    padding: 0
  },
  badge: {
    "& span": {
      top: "7mm",
      right: "7mm"
    }
  },
  link: {
    textDecoration: "none"
  }
});

function MainMenuEntry({icon, classes, title, badgeContent}) {
  return(
    <div
      className={classes.container}
    >
      <Link
        to={pathRoot + "/" + title}
        className={classes.link}
      >
        <Typography
          variant={"h6"}
          color={"primary"}
        >
          {title}
        </Typography>
        <Badge
          className={classes.badge}
          color={"secondary"}
          invisible={badgeContent === 0}
          badgeContent={badgeContent}
        >
          <IconButton
            color={"primary"}
            className={classes.icon}
          >
            {icon}
          </IconButton>
        </Badge>
      </Link>
    </div>
  )
}

export default withStyles(styles)(MainMenuEntry)