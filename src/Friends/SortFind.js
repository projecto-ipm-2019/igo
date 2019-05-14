import {Divider, List, ListItem, ListItemIcon, ListItemText, Typography, withStyles} from "@material-ui/core";
import {Contacts, LocationOn, Search, Stars} from "@material-ui/icons";
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
      return <Stars/>;
    case 1:
      return <LocationOn/>;
    case 2:
      return <Contacts/>;
    case 3:
      return <Search/>;
    default:
      return null;
  }
}

function SortFind({updateSortFindIndex, sortFindIndex, classes}){
  return (
    <div className={classes.root}>
      <header
        className={classes.header}
      >
        <Typography
          variant={"h6"}
          color={"textSecondary"}
        >
          Sort Find
        </Typography>
        <Divider/>
      </header>
      <main>
        <List
          disablePadding
        >
          <ListItem
            button
            selected={sortFindIndex === 0}
            onClick={event => updateSortFindIndex(0)}
          >
            <ListItemIcon>
              {iconByIndex(0)}
            </ListItemIcon>
            <ListItemText primary="Recommend" />
          </ListItem>
          <ListItem
            button
            selected={sortFindIndex === 1}
            onClick={event => updateSortFindIndex(1)}
          >
            <ListItemIcon>
              {iconByIndex(1)}
            </ListItemIcon>
            <ListItemText primary="Nearby" />
          </ListItem>
          <ListItem
            button
            selected={sortFindIndex === 2}
            onClick={event => updateSortFindIndex(2)}
          >
            <ListItemIcon>
              {iconByIndex(2)}
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItem>
          <ListItem
            button
            selected={sortFindIndex === 3}
            onClick={event => updateSortFindIndex(3)}
          >
            <ListItemIcon>
              {iconByIndex(3)}
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
        </List>
      </main>
    </div>
  );
}

export default withStyles(styles)(SortFind)