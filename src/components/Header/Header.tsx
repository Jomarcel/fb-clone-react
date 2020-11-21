import React, { ReactElement } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, IconButton } from "@material-ui/core";

const header = (): ReactElement => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <PlayCircleFilledIcon fontSize="large" />
        </div>
        <div className="header__option">
          {" "}
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          {" "}
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
        <div className="header__option">
          {" "}
          <SportsEsportsIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://scontent.fbne8-1.fna.fbcdn.net/v/t1.0-9/90197983_3035598109794124_479199985229889536_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=ivAJaiHR8_EAX8RoDb5&_nc_ht=scontent.fbne8-1.fna&oh=8ec4ea330deec72e68939885f2228958&oe=5FD36B0E" />
          <h4>Jomarcel</h4>
        </div>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default header;
