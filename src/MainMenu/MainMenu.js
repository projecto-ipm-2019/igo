import React from 'react';
import ReactSwipe from 'nuka-carousel';
import MainMenuEntry from './MainMenuEntry';
import {Event, Group, Notifications} from "@material-ui/icons";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
  root: {
    '& ul': {
      width: "45mm",
      height: "8mm"
    },
    '& button': {
      pointerEvents: "none"
    }
  },
  icon: {
    height: "30mm",
    width: "30mm",
  }
});

function MainMenu({classes, profileUnread}){
  return(
    <ReactSwipe
      className={classes.root}
      enableKeyboardControls={true}
      renderCenterLeftControls={() => (false)}
      renderCenterRightControls={() => (false)}
    >
      <MainMenuEntry
        title={"Friends"}
        badgeContent={0}
        icon={<Group className={classes.icon}/>}
      />
      <MainMenuEntry
        title={"Events"}
        badgeContent={0}
        icon={<Event className={classes.icon}/>}
      />
      <MainMenuEntry
        title={"Notifications"}
        badgeContent={profileUnread()}
        icon={<Notifications className={classes.icon}/>}
      />
    </ReactSwipe>
  )
}

export default withStyles(styles)(MainMenu)