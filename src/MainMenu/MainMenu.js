import React , {Component} from 'react';
import ReactSwipe from 'nuka-carousel'
import { Link } from "react-router-dom";

import "./MainMenu.css"
import friendsImg from "./Resources/friends.svg"
import notificationsImg from "./Resources/notifications.svg"
import eventsImg from "./Resources/events.svg"
import oneImg from "./Resources/oneCircle.png"

export class MainMenu extends Component {
  render() {
    return(
      <ReactSwipe
        className={"MainMenu"}
        enableKeyboardControls={true}
        renderCenterLeftControls={() => (false)}
        renderCenterRightControls={() => (false)}
      >
        <div className={"MainMenu-Friends"}>
          <Entry
            title={"Friends"}
            src={friendsImg}
          />
        </div>
        <div className={"MainMenu-Events"}>
          <Entry
            title={"Events"}
            src={eventsImg}
          />
        </div>
        <div className={"MainMenu-Notifications"}>
          <Entry
            title={"Notifications"}
            src={notificationsImg}
          />
		  <div className= {"NotifNumber"}>
			<img src={oneImg} alt="nr"/>
		  </div>
        </div>
      </ReactSwipe>
    );
  }
}

export const Entry = ({title, src}) => (
	<table className={"MainMenuEntry"}>
	<tr>
		<th  >
		{title}
		</th>
	</tr>
	<tr>
		<td>
		<Link to={"/" + title}>
		  <input
			className={"MainMenuImage"}
			type={"image"}
			alt={title + "-image"}
			src={src}
		  />
		</Link>
		</td>
	</tr>
	</table>
);