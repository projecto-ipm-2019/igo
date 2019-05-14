import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import {Avatar, Badge, Divider, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import {Link, Route, Switch} from "react-router-dom";
import QRCode from 'qrcode.react'
import ReactSwipe from 'nuka-carousel'
import uuid4 from 'uuid/v4'

const styles = theme => ({
  root: {
    width: "45mm",
    height: "45mm",
    overflowY: "auto",
  },

  badge: {
    marginTop: "5mm"
  },

  avatar: {
    width: "30mm",
    height: "30mm",
    fontSize: "20mm"
  },
  link: {
    textDecoration: "none"
  },
  map: {
    width: "45mm",
    height: "45mm"
  },
  confirm: {
    backgroundColor: "green",
  },
  buy: {
    height: "45mm",
    overflow: "hidden"
  },
});

class EventEntry extends Component {
  state = {
    imageIndex: 0
  };

  render() {
    const {match, event, classes, switchInterest} = this.props;
    return (
      <React.Fragment>
        <Badge
          badgeContent={event.photoAlbum.length}
          color={"primary"}
          max={9}
          className={classes.badge}
        >
          <Avatar
            onClick={() => { if(event.photoAlbum.length > 0) {
                this.setState({imageIndex: (this.state.imageIndex + 1)%event.photoAlbum.length})
              }}
            }
            alt={event.name}
            src={event.photoAlbum.length > 0 ?
              event.photoAlbum[this.state.imageIndex] : ""
            }
            className={classes.avatar}
          />
        </Badge>
        <Typography>
          {event.name}
        </Typography>
        <Typography>
          {event.date}
        </Typography>
        <Divider/>
        <List
          disablePadding
        >
          {event.ticket === null ?
            <ListItem
              button
              onClick={switchInterest}
              divider
            >
              <ListItemText primary={event.interested ?
                <Typography
                  align={"center"}
                  variant={"body1"}
                >
                  Not Interested
                </Typography>
                :
                <Typography
                  variant={"body1"}
                  align={"center"}
                >
                  Show me more...
                </Typography>
              }/>
            </ListItem>
            :
            ""
          }
          {event.interested ?
            <Link
              to={match.url + "/ticket"}
              className={classes.link}
            >
              <ListItem
                button
                divider
              >
                <ListItemText
                  primary={event.ticket === null ?
                    <Typography
                      align={"center"}
                      variant={"body1"}
                    >
                      Buy Ticket
                    </Typography>
                    :
                    <Typography
                      align={"center"}
                      variant={"body1"}
                    >
                      Check Ticket
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
            :
            ""
          }
          {event.interested ?
            <Link
              to={match.url + "/location"}
              className={classes.link}
            >
              <ListItem
                button
              >
                <ListItemText
                  primary={
                    <Typography
                      align={"center"}
                      variant={"body1"}
                    >
                      Location
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
            :
            ""
          }
        </List>
      </React.Fragment>
    );
  }
}

function TicketBuying({event, classes, buyTicket}) {
  return(
    event.ticket === null ?
      <div
        className={classes.buy}
      >
        <Typography
          variant={"h6"}
          color={"primary"}
        >
          Buy Ticket
        </Typography>
        <ReactSwipe
          withoutControls
          heightMode={"first"}
          afterSlide={(slideIndex) => (
            slideIndex === 1 ?
              buyTicket()
              :
              null
          )}
        >
          <div
            className={classes.buy}
          >
            <Typography
              variant={"h3"}
            >
              Price: {event.price}€
            </Typography>
            <Typography>
              (Swipe Left to Confirm)
            </Typography>
          </div>
          <div
            className={classes.confirm}
          >
            <Typography
              variant={"h4"}
              className={classes.buy}
            >
              CONFIRM PAYMENT
            </Typography>
          </div>
        </ReactSwipe>
      </div>
      :
      <div>
        <Typography
          variant={"h6"}
          color={"primary"}
        >
          Your ticket
        </Typography>
        <QRCode value={event.ticket}/>
      </div>
  )
}


function Location({event, classes}) {
  return(
    <div
      className={classes.root}
    >
      <Typography
        variant={"h6"}
        color={"primary"}
      >
        {event.location.name}
      </Typography>
      <img src={event.location.map} alt={"map"} className={classes.map}/>
      GPS Coordinates: [{event.location.coordinates[0]},{event.location.coordinates[1]}]
    </div>
  )
}

class Event extends Component {
  buyTicket = () => {
    this.event.ticket = uuid4();
    this.setState({mostRecentTicket: this.event.ticket})
  };

  switchInterest = () => {
    if(this.event.ticket === null) {
      this.event.interested = !this.event.interested;
      this.setState({previousEventInterest: !this.event.interested})
    }
  };

  render() {

    const {
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
                event={this.event}
                classes={classes}
                buyTicket={this.buyTicket}
              />
            }
          />
          <Route
            path={this.props.match.url + "/location"}
            render={(props) =>
              <Location
                classes={classes}
                event={this.event}
              />
            }
          />
        </Switch>
      </div>
    )
  }
}

export default withStyles(styles)(Event)

