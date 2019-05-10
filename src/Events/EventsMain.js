import {Link} from "react-router-dom";
import {Divider, List} from "@material-ui/core";
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
    backgroundColor: theme.palette.background.paper
  },
  list: {
  }
});

function EventsMain(props) {
  const {
    events,
    classes
  } = props;

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Link to={props.match.url + "/sort"}>
          Your Events
        </Link>
        <Divider/>
      </header>
      <main>
        <List className={classes.list}>
          {events.filter((event) =>
            event.interested
          ).map((event) =>
            <div
              key={event.id}
            >
              <EventsEntry
                event={event}
              />
              <Divider/>
            </div>
          )}
        </List>
      </main>
    </div>
  );
}

export default withStyles(styles)(EventsMain)