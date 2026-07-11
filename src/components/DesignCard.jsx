import React from "react";

import "../styles/designCard.scss";

import { PiPlus } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";

const DesignCard = ({ item, onClick }) => {

    const handleClick = () => {

        if (item.isComingSoon) return;

        onClick(item);

    };

    if (item.isComingSoon) {
        return (
            <article className="design-card coming-soon">

                <div className="coming-overlay">

                    <span className="plus">
                        <PiPlus />
                    </span>

                    <h3>Coming Soon</h3>

                    <p>
                        새로운 디자인 작업물을
                        준비하고 있습니다.
                    </p>

                </div>

            </article>
        );
    }

    return (
        <article
            className="design-card"
            onClick={handleClick}
        >

            <img
                src={item.thumbnail}
                alt={item.title}
            />

            <div className="card-overlay">

                <div className="card-info">

                    <span>{item.type}</span>

                    <h3>{item.title}</h3>

                    <p>{item.subtitle}</p>

                    <div className="view-detail">

                        View Project

                        <div className="view-arrow">
                            <GoArrowRight />
                        </div>

                    </div>

                </div>

            </div>

        </article>
    );
};

export default DesignCard;