import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import {List, Typography} from "@material-ui/core";
import EventsEntry from './EventsEntry'
import {pathRoot} from "../iGo/iGo";

const styles = theme => ({
  root: {
    width: "45mm",
    height: "45mm",
    overflowY: "auto"
  },
  header: {
    backgroundColor: theme.palette.primary.main
  }
});

function EventsTickets({events, classes}) {
  return (
    <div className={classes.root}>
      <header
        className={classes.header}
      >
        <Typography
          color={"textSecondary"}
          variant={"h6"}
        >
          Your Tickets
        </Typography>
      </header>
      <main>
        <List
          disablePadding
        >
          {events
            .filter((event) =>
              event.ticket !== null)
            .map((event) =>
              <EventsEntry
                key={event.id}
                event={event}
                to={pathRoot + "/Event/" + event.id + "/ticket"}
              />
            )
          }
        </List>
      </main>
    </div>
  );
}

export default withStyles(styles)(EventsTickets)