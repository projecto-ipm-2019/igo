import {Link} from "react-router-dom";
import {Divider, Icon, List, Typography, withStyles} from "@material-ui/core";
import FriendsEntry from "./FriendsEntry";
import React from "react";
import {iconByIndex} from "./SortFind";

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

function FriendsFind({profiles, classes, match, sortFindIndex}) {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Link to={match.url + "/sort"} className={classes.link}>
          <Typography
            color={"textSecondary"}
            variant={"h6"}
          >
            Find Friends
          </Typography>
          <Icon
            className={classes.icon}
          >
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
          </Icon>
          <Divider/>
        </Link>
      </header>
      <main>
        <List disablePadding>
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
        </List>
      </main>
    </div>
  );
}

export default withStyles(styles)(FriendsFind)