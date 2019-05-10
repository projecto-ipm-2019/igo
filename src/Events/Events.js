import React, {Component} from 'react'
import {Route, Switch} from "react-router";

import ReactSwipe from 'nuka-carousel';
import EventsMain from './EventsMain';
import EventsFind from './EventsFind';
import EventsTickets from './EventsTickets';
import SortEvents from './SortEvents';

export default class extends Component {
  render() {
    const {
      events
    } = this.props;

    return(
      <div>
        <Switch>
          <Route
            exact path={this.props.match.url}
            render={()=>
              <ReactSwipe
                withoutControls={true}
              >
                <EventsMain
                  {...this.props}
                  events={events}
                />
                <EventsFind
                  {...this.props}
                  events={events}
                />
                <EventsTickets/>
              </ReactSwipe>
            }
          />
          <Route
            exact path={this.props.match.url + "/sort"}
            render={(props) =>
              <SortEvents/>
            }
          />
        </Switch>
      </div>
    );
  }
}