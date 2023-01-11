import React from "react";
import { useTranslation } from "react-i18next";
import PersonalCard from "./PersonalCard/PersonalCard";
import PersonalInfo from "./PersonalCard/PersonalData.json";
import "./Team.scss";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="team-wrapper" name="team">
      <div className="team-label">
        <div className="pre-label">{t("our")}</div>
        <div className="after-label">{t("team")}</div>
      </div>
      <div className="content-wrapper">
        <div className="team-text-wrapper">
          <div className="title-text">{t("team title")}</div>
          <div className="main-tetx">{t("team text")}</div>
        </div>
        <div className="personal-card-box">
          {PersonalInfo.map(({ id, position, name, image }) => (
            <PersonalCard key={id} avatar={image} position={position} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
