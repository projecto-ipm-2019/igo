import {Link} from "react-router-dom";
import {Divider, List} from "@material-ui/core";
import EventsEntry from "./EventsEntry";
import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';

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

function EventsFind(props) {
  const {
    events,
    classes
  } = props;
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Link to={props.match.url + "/sort"}>
          Find Events
        </Link>
        <Divider/>
      </header>
      <main>
        <List>
          {events.filter((event) =>
            !event.interested
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
  )
}

export default withStyles(styles)(EventsFind)