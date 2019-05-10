import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";

const styles = {
  root: {}
};

function EventsTickets(props) {
  // const {
  //   classes
  // } = props;

  return (
    <div className={"Events"}>
      Events Tickets
    </div>
  );
}

export default withStyles(styles)(EventsTickets)