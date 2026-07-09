import React from 'react'

import "../styles/designCard.scss";

const DesignCard = ({ item }) => {

    if (item.isComingSoon) {
        return (
            <article className="design-card coming-soon">

                <div className="coming-overlay">

                    <span className="plus">+</span>

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
        <article className="design-card">

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

                        View Detail →

                    </div>

                </div>

            </div>

        </article>
    );
};

export default DesignCard;