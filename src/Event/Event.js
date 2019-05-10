import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import {Avatar, Badge, Divider, List, ListItem, ListItemText} from "@material-ui/core";
import {Link, Route, Switch} from "react-router-dom";

const styles = {
  root: {
    width: "45mm",
    height: "45mm",
    overflowY: "auto"
  },

  badge: {
    marginTop: "7mm"
  },

  avatar: {
    width: "30mm",
    height: "30mm",
    fontSize: "20mm"
  }
};

function EventEntry({match, event, classes, switchInterest}) {
  return(
    <React.Fragment>
      <Badge
        badgeContent={event.photoAlbum.length}
        color={"primary"}
        max={9}
        className={classes.badge}
      >
        <Avatar
          alt={event.name}
          src={event.photoAlbum.length > 0 ? event.photoAlbum[0] : ""}
          className={classes.avatar}
        />
      </Badge>
      <Divider/>
      <List>
        <ListItem
          button
          onClick={switchInterest}
        >
          <ListItemText primary={event.interested ? "Interested" : "Show me more..."}/>
        </ListItem>
        <Divider/>
        {event.interested ?
            <Link to={match.url + "/ticket"}>
              <ListItem
                button
              >
                <ListItemText primary={event.ticket === null ? "Buy Ticket" : "Check Ticket"}/>
              </ListItem>
              <Divider/>
            </Link>
            :
            ""
        }
      </List>
    </React.Fragment>
  );
}

function TicketBuying() {
  return(
    <div>
      Please confirm the purchase of

    </div>
  )
}

class Event extends Component {
  switchInterest = () => {
    this.event.interested = !this.event.interested;
    this.setState({previousEventInterest: !this.event.interested})
  };

  render() {

    const {
      //profiles,
      events,
      classes
    } = this.props;

    this.event = events.find((event) =>
      event.id.toString() === this.props.match.params.eventId
    );

    console.debug("Event", this.event);

    return (
      <div className={classes.root}>
        <Switch>
          <Route
            exact
            path={this.props.match.url}
            render={(props) =>
              <EventEntry
                {...props}
                event={this.event}
                classes={classes}
                switchInterest={this.switchInterest}
              />
            }
          />
          <Route
            path={this.props.match.url + "/ticket"}
            render={(props) =>
              <TicketBuying
                {...props}
              />
            }
          />
        </Switch>
      </div>
    )
  }
}

export default withStyles(styles)(Event)

