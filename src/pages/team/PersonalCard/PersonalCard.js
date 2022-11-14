import React from "react";
import "./PersonalCard.scss";

const PersonalCard = ({ avatar, position, name }) => {
  return (
    <div className="personal-card-wrapper">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="position">{position}</div>
      <div className="full-name">{name}</div>
    </div>
  );
};

export default PersonalCard;
