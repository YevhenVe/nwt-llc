import React from "react";
import SpecializeCardInfo from "./SpecializeCard.json";
import "./SpecializeCard.scss";

const SpecializeCard = () => {
    return (
        <div className="specialize-card-box">
            {SpecializeCardInfo.map((item) => (
                <div
                    key={item.id}
                    className="specialize-card-wrapper"
                >
                    <div className="specialize-card-top">
                        <img
                            src={item.image}
                            alt="illustration"
                        />
                        <div className="specialize-card-overlay" />
                        <div className="specialize-card-title">{item.title}</div>
                    </div>
                    <div className="specialize-card-bottom">
                        <ul>
                            {Object.entries(item.items).map(([key, value]) => (
                                <li key={`${item.id}-${key}`}>{value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SpecializeCard;
