import React, {Component} from 'react'

import ReactSwipe from 'nuka-carousel';
import EventsMain from './EventsMain';
import EventsFind from './EventsFind';
import EventsTickets from './EventsTickets';

export default class extends Component {
  render() {
    const {
      events
    } = this.props;

    return(
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
        <EventsTickets
          {...this.props}
          events={events  }
        />
      </ReactSwipe>
    );
  }
}