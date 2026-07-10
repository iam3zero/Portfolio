import { useState, useEffect, useRef } from "react";

import "../styles/design.scss";

import designData from "../data/designData";

import DesignFilter from "../components/DesignFilter";
import DesignSwiper from "../components/DesignSwiper";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Design = () => {

    const [activeCategory, setActiveCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const filteredData =
        activeCategory === "all"
            ? designData
            : designData.filter(
                  item => item.category === activeCategory
              );

    const getSlidesPerGroup = () => {

        if (window.innerWidth >= 1440) return 4;

        if (window.innerWidth >= 1024) return 3;

        if (window.innerWidth >= 768) return 2;

        return 1;

    };

    useEffect(() => {

        setCurrentPage(1);

        setTotalPages(
            Math.ceil(
                filteredData.length /
                getSlidesPerGroup()
            )
        );

    }, [activeCategory, filteredData]);

    return (

        <section
            className="design-works"
            id="design"
        >

            <div className="design-inner">

                <h2 className="design-title">
                    Design Works
                </h2>

                <div className="design-filter-wrap">

                    <DesignFilter
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />

                </div>

                <div className="design-controller">

                    <div className="design-controls">

                        <div className="design-pagination">
                            {String(currentPage).padStart(2, "0")}
                            <span> / </span>
                            {String(totalPages).padStart(2, "0")}
                        </div>

                        <div className="design-navigation">

                            <button
                                ref={prevRef}
                                className="design-arrow prev"
                            >
                                <FiArrowLeft />
                            </button>

                            <button
                                ref={nextRef}
                                className="design-arrow next"
                            >
                                <FiArrowRight />
                            </button>

                        </div>

                    </div>

                </div>

                <DesignSwiper
                    items={filteredData}
                    prevRef={prevRef}
                    nextRef={nextRef}
                    setCurrentPage={setCurrentPage}
                />

            </div>

        </section>

    );

};

export default Design;