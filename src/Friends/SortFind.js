import {Divider, List, ListItem, ListItemIcon, ListItemText, withStyles} from "@material-ui/core";
import {Contacts, LocationOn, Search, Stars} from "@material-ui/icons";
import React from "react";

const styles = theme => ({
  header: {
    height: "5mm"
  },
  main: {
    height: "40mm",
    overflowY: "scroll"
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
    <div>
      <header
        className={classes.header}
      >
        Sort Find
        <Divider/>
      </header>
      <main>
        <div
          className={classes.main}
        >
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
        </div>
      </main>
    </div>
  );
}

export default withStyles(styles)(SortFind)