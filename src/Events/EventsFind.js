import {Link} from "react-router-dom";
import {List, Typography} from "@material-ui/core";
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
    backgroundColor: theme.palette.primary.main
  },
  list: {
  },
  link: {
    textDecoration: "none"
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
        <Link
          to={props.match.url + "/sort"}
          className={classes.link}
        >
          <Typography
            color={"textSecondary"}
            variant={"h6"}
          >
            Find Events
          </Typography>
        </Link>
      </header>
      <main>
        <List
          disablePadding
        >
          {events.filter((event) =>
            !event.interested
          ).map((event) =>
            <EventsEntry
              event={event}
              key={event.id}
            />
          )}
        </List>
      </main>
    </div>
  )
}

export default withStyles(styles)(EventsFind)