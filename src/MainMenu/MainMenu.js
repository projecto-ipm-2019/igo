import React , {Component} from 'react';
import ReactSwipe from 'nuka-carousel'
import { Link } from "react-router-dom";

import "./MainMenu.css"
import friendsImg from "./Resources/friends.svg"
import notificationsImg from "./Resources/notifications.png"
import eventsImg from "./Resources/events.svg"
import newNotifImg from "./Resources/newnotifications.png"

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
			<Notif/>,
        </div>
      </ReactSwipe>
    );
  }
}

function Notif() {
	if (global.hasNewNotif===0){
		return(
		<Entry
			title={"Notifications"}
			src={notificationsImg}
		/>
		);
	}
	else{	
		return(
			<Entry
				title={"Notifications"}
				src={newNotifImg}
			/>
		);
	}
}

export const Entry = ({title, src}) => (
	<div className={"MainMenuEntry"}>
		{title}
		<div>
		<Link to={"/" + title}>
		  <input
			type={"image"}
			alt={title + "-image"}
			src={src}
			width="120"
			height="120"
			
		  />
		</Link>
		</div>
	</div>
);