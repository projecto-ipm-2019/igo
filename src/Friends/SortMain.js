import React from "react";
import SortFind from './SortFind'
import SortFriends from "./SortFriends";
import {withStyles} from "@material-ui/core";

const styles = theme => ({

});

function SortMain(props){
    return (
      <div>
        {props.currentSlide === 0 ?
          <SortFriends {...props}/>
          :
          <SortFind {...props}/>
        }
      </div>
    )
}

export default withStyles(styles)(SortMain)