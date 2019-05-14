import {Divider, List, ListItem, ListItemIcon, ListItemText, Typography, withStyles} from "@material-ui/core";
import {LocationOn, RecentActors, SortByAlpha} from "@material-ui/icons";
import React from "react";

const styles = theme => ({
  root: {
    height: "45mm",
    width: "45mm",
    overflowY: "scroll"
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  }
});

export function iconByIndex(index) {
  switch (index) {
    case 0:
      return <RecentActors/>;
    case 1:
      return <LocationOn/>;
    case 2:
      return <SortByAlpha/>;
    default:
      return null
  }
}

function SortFriends({updateSortFriendsIndex, sortFriendsIndex, classes}) {
  return (
    <div className={classes.root}>
      <header
        className={classes.header}
      >
        <Typography
          variant={"h6"}
          color={"textSecondary"}
        >
          Sort Friends
        </Typography>
        <Divider/>
      </header>
      <main>
        <List
          disablePadding
        >
          <ListItem
            button
            selected={sortFriendsIndex === 0}
            onClick={event => updateSortFriendsIndex(0)}
          >
            <ListItemIcon>
              {iconByIndex(0)}
            </ListItemIcon>
            <ListItemText primary="Recent" />
          </ListItem>
          <ListItem
            button
            selected={sortFriendsIndex === 1}
            onClick={event => updateSortFriendsIndex(1)}
          >
            <ListItemIcon>
              {iconByIndex(1)}
            </ListItemIcon>
            <ListItemText primary="Nearby" />
          </ListItem>
          <ListItem
            button
            selected={sortFriendsIndex === 2}
            onClick={event => updateSortFriendsIndex(2)}
          >
            <ListItemIcon>
              {iconByIndex(2)}
            </ListItemIcon>
            <ListItemText primary="Alphabetic" />
          </ListItem>
        </List>
      </main>
    </div>
  );
}

export default withStyles(styles)(SortFriends)