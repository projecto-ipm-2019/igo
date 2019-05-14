import {List, Typography} from "@material-ui/core";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import EventsEntry from "./EventsEntry"

const styles = theme => ({
  root: {
    width: "45mm",
    height: "45mm",
    overflowY: "auto"
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    textDecoration: "none"
  }
});

function EventsMain({events, classes}) {
  return (
    <div className={classes.root}>
      <header
        className={classes.header}
      >
        <Typography
          color={"textSecondary"}
          variant={"h6"}
        >
          Your Events
        </Typography>
      </header>
      <main>
        <List
          disablePadding
        >
          {events.filter((event) =>
            event.interested
          ).map((event) =>
            <EventsEntry
              event={event}
              key={event.id}
            />
          )}
        </List>
      </main>
    </div>
  );
}

export default withStyles(styles)(EventsMain)