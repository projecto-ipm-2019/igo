import FriendsDivider from './FriendsDivider';
import {Divider, withStyles} from "@material-ui/core";
import React from "react";

import FriendsEntry from './FriendsEntry'

const styles = theme => ({

});

function FriendsPending({profiles, classes}) {
  return (
    <div className={"Friends"}>
      <header className={"Friends-Title"}>
        Pending
        <FriendsDivider/>
      </header>
      <main>
        {profiles.filter((profile) => (
          profile.friendshipStatus.isPending
        )).map((profile) => (
          <FriendsEntry
            key={profile.name}
            profile={profile}
          />
        ))}
        <header className={"Friends-Title"}>
          Requests
          <Divider/>
        </header>
        <main>
          {profiles.filter((profile) => (
            profile.friendshipStatus.isRequest
          )).map((profile) => (
            <FriendsEntry
              key={profile.name}
              profile={profile}
            />
          ))}
        </main>
      </main>
    </div>
  );
}

export default withStyles(styles)(FriendsPending)