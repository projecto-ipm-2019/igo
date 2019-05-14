import {Link} from "react-router-dom";
import {Divider, withStyles} from "@material-ui/core";
import FriendsEntry from "./FriendsEntry";
import React from "react";
import {iconByIndex} from "./SortFriends";

const styles = theme => ({

});

function FriendsMain({profiles, classes, match, sortFriendsIndex}) {
  return (
    <div className={"Friends"}>
      <header className={"Friends-Title"}>
        <Link to={match.url + "/sort"}>
          Your Friends
          <div>
            {sortFriendsIndex === 0 ?
              iconByIndex(0)
              :
              sortFriendsIndex === 1 ?
                iconByIndex(1)
                :
                sortFriendsIndex === 2 ?
                  iconByIndex(2)
                  :
                  ""
            }
          </div>
          <Divider/>
        </Link>
      </header>
      <main>
        {profiles.filter((profile) => (
          profile.friendshipStatus.isFriend
        )).sort((p1, p2) => {
            if(sortFriendsIndex === 0)
              return p2.recent - p1.recent;
            if(sortFriendsIndex === 1)
              return p1.location.distance - p2.location.distance;
            if(sortFriendsIndex === 2)
              if(p1.name < p2.name)
                return -1;
            if(p1.name > p2.name)
              return 1;
            return 0
          }
        ).map((profile) => (
          <FriendsEntry
            key={profile.id}
            profile={profile}
          />
        ))}
      </main>
    </div>
  );
}

export default withStyles(styles)(FriendsMain)