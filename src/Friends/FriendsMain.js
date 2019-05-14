import {Link} from "react-router-dom";
import {Divider, Icon, List, Typography, withStyles} from "@material-ui/core";
import FriendsEntry from "./FriendsEntry";
import React from "react";
import {iconByIndex} from "./SortFriends";

const styles = theme => ({
  root: {
    width: "45mm",
    height: "45mm",
    overflowY: "auto"
  },
  header: {
    backgroundColor: theme.palette.primary.main
  },
  link: {
    textDecoration: "none"
  },
  icon: {
    color: theme.palette.text.secondary
  }
});

function FriendsMain({profiles, classes, match, sortFriendsIndex}) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Link to={match.url + "/sort"} className={classes.link}>
          <Typography
            color={"textSecondary"}
            variant={"h6"}
          >
            Your Friends
          </Typography>
          <Icon
            className={classes.icon}
          >
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
          </Icon>
          <Divider/>
        </Link>
      </header>
      <main>
        <List
          disablePadding
        >
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
        </List>
      </main>
    </div>
  );
}

export default withStyles(styles)(FriendsMain)