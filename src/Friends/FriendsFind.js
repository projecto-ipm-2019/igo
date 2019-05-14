import {Link} from "react-router-dom";
import {Divider, withStyles} from "@material-ui/core";
import FriendsEntry from "./FriendsEntry";
import React from "react";
import {iconByIndex} from "./SortFind";

const styles = theme => ({

});

function FriendsFind({profiles, classes, match, sortFindIndex}) {
  return (
    <div className={"Friends"}>
      <header className={"Friends-Title"}>
        <Link to={match.url + "/sort"}>
          Find
          <div>
            {sortFindIndex === 0 ?
              iconByIndex(0)
              :
              sortFindIndex === 1 ?
                iconByIndex(1)
                :
                sortFindIndex === 2 ?
                  iconByIndex(2)
                  :
                  sortFindIndex === 3 ?
                    iconByIndex(3)
                    :
                    ""
            }
          </div>
          <Divider/>
        </Link>
      </header>
      <main>
        {profiles.filter((profile) => {
          if(sortFindIndex === 2)
            return !profile.friendshipStatus.isFriend && profile.isContact;
          return !profile.friendshipStatus.isFriend;
        }).sort((p1, p2) => {
            if(sortFindIndex === 0)
              return p2.recommend - p1.recommend;
            if(sortFindIndex === 1)
              return p1.location.distance - p2.location.distance;
            return 0
          }
        ).map((profile) => (
          <FriendsEntry
            key={profile.name}
            profile={profile}
          />
        ))}
      </main>
    </div>
  );
}

export default withStyles(styles)(FriendsFind)