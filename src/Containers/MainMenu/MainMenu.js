import React , {Component} from 'react';
import ReactSwipe from 'nuka-carousel'
import { Link } from "react-router-dom";

import "./MainMenu.css"
import logo from "./Resources/logo.svg"

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
            src={logo}
          />
        </div>
        <div className={"MainMenu-Events"}>
          <Entry
            title={"Events"}
            src={logo}
          />
        </div>
        <div className={"MainMenu-Notifications"}>
          <Entry
            title={"Notifications"}
            src={logo}
          />
        </div>
      </ReactSwipe>
    );
  }
}

export const Entry = ({title, src}) => (
  <div
    className={"MainMenu-Entry"}
  >
    {title}
    <Link to={"/" + title}>
      <input
        type={"image"}
        alt={title + "-image"}
        src={src}
      />
    </Link>
  </div>
);