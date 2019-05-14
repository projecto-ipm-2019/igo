import React, {Component} from 'react'
import ReactSwipe from 'nuka-carousel';
import {Route, Switch} from "react-router-dom";
import {createStyles, withStyles} from "@material-ui/core";

import FriendsMain from './FriendsMain'
import FriendsFind from './FriendsFind'
import FriendsQR from './FriendsQR'
import SortMain from './SortMain'
import FriendsPending from './FriendsPending'

const styles = createStyles({

});

class Friends extends Component {
  state = {
    currentSlide: 0,
    sortFriendsIndex: 0,
    sortFindIndex: 0,
  };

  updateSortFriendsIndex = (index) => {
    this.setState({sortFriendsIndex: index});
    this.props.history.goBack();
  };

  updateSortFindIndex = (index) => {
    this.setState({sortFindIndex: index});
    this.props.history.goBack();
  };


  render() {
    const {
      profiles
    } = this.props;

    console.debug("Props", this.props);

    return(
      <div>
        <Switch>
          <Route
            exact path={this.props.match.url}
            render={() =>
              <ReactSwipe
                withoutControls={true}
                slideIndex={this.state.currentSlide}
                afterSlide={(slideIndex) => this.setState({currentSlide: slideIndex})}
              >
                <FriendsMain
                  {...this.props}
                  profiles={profiles}
                  sortFriendsIndex={this.state.sortFriendsIndex}
                />
                <FriendsFind
                  {...this.props}
                  sortFindIndex={this.state.sortFindIndex}
                  profiles={profiles}
                />
                <FriendsPending
                  profiles={profiles}
                />
                <FriendsQR/>
              </ReactSwipe>
            }
          />
          <Route
            exact path={this.props.match.url + "/sort"}
            render={(props) =>
              <SortMain
                sortFriendsIndex={this.state.sortFriendsIndex}
                sortFindIndex={this.state.sortFindIndex}
                updateSortFriendsIndex={this.updateSortFriendsIndex}
                updateSortFindIndex={this.updateSortFindIndex}
                currentSlide={this.state.currentSlide}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Friends)