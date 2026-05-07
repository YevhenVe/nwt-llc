import React, { useState } from "react";
import SpecializeCardTowerInfo from "./SpecializeCardTower.json";
import SpecializeCardFiberInfo from "./SpecializeCardFiber.json";
import "./SpecializeCard.scss";

const categories = [
    {
        id: "fiber",
        title: "Fiber Services",
        subtitle: "OSP, Underground, Splicing & More",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" opacity="0.15" />
                <path d="M16 44C16 44 22 28 32 28C42 28 48 44 48 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M12 48C12 48 20 24 32 24C44 24 52 48 52 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                <path d="M20 40C20 40 25 32 32 32C39 32 44 40 44 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                <circle cx="32" cy="20" r="4" fill="currentColor" />
                <circle cx="16" cy="48" r="3" fill="currentColor" opacity="0.6" />
                <circle cx="48" cy="48" r="3" fill="currentColor" opacity="0.6" />
            </svg>
        ),
        data: SpecializeCardFiberInfo,
        gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        accentColor: "#4fc3f7",
    },
    {
        id: "tower",
        title: "Tower Services",
        subtitle: "Construction, 5G, Maintenance & More",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" opacity="0.15" />
                <path d="M32 12V52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M24 18L32 12L40 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 52H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M26 52L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <path d="M38 52L34 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <path d="M24 40H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                <path d="M26 34H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                <circle cx="32" cy="24" r="3" fill="currentColor" opacity="0.8" />
            </svg>
        ),
        data: SpecializeCardTowerInfo,
        gradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        accentColor: "#fe5b60",
    },
];

const SpecializeCard = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(activeCategory === categoryId ? null : categoryId);
    };

    const activeData = categories.find((c) => c.id === activeCategory);

    return (
        <div className="specialize-section">
            {/* Category selector cards */}
            <div className="category-selector">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className={`category-card ${activeCategory === cat.id ? "active" : ""}`}
                        style={{ background: cat.gradient }}
                        onClick={() => handleCategoryClick(cat.id)}
                    >
                        <div className="category-card-glow" style={{ background: cat.accentColor }} />
                        <div className="category-card-icon" style={{ color: cat.accentColor }}>
                            {cat.icon}
                        </div>
                        <div className="category-card-text">
                            <h3>{cat.title}</h3>
                            <p>{cat.subtitle}</p>
                        </div>
                        <div className="category-card-arrow" style={{ color: cat.accentColor }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            {/* Expanded service cards panel */}
            <div className={`services-panel ${activeCategory ? "open" : ""}`}>
                {activeData && (
                    <div className="specialize-card-box">
                        {activeData.data.map((item) => (
                            <div key={item.id} className="specialize-card-wrapper">
                                <div className="specialize-card-top">
                                    <img src={item.image} alt={item.title} />
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
                )}
            </div>
        </div>
    );
};

export default SpecializeCard;
