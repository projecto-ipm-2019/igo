import {Divider, List, Typography, withStyles} from "@material-ui/core";
import React from "react";

import FriendsEntry from './FriendsEntry'

const styles = theme => ({
  root: {
    width: "45mm",
    height: "45mm",
    overflowY: "auto"
  },
  header: {
    backgroundColor: theme.palette.primary.main
  },
  link: {
    textDecoration: "none"
  }
});

function FriendsPending({profiles, classes}) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography
          variant={"h6"}
          color={"textSecondary"}
        >
          Pending
        </Typography>
        <Divider/>
      </header>
      <main>
        <List disablePadding>
          {profiles.filter((profile) => (
            profile.friendshipStatus.isPending
          )).map((profile) => (
            <FriendsEntry
              key={profile.name}
              profile={profile}
            />
          ))}
        </List>
        <header className={classes.header}>
          <Typography
            variant={"h6"}
            color={"textSecondary"}
          >
            Requests
          </Typography>
          <Divider/>
        </header>
        <main>
          <List disablePadding>
            {profiles.filter((profile) => (
              profile.friendshipStatus.isRequest
            )).map((profile) => (
              <FriendsEntry
                key={profile.name}
                profile={profile}
              />
            ))}
          </List>
        </main>
      </main>
    </div>
  );
}

export default withStyles(styles)(FriendsPending)