import { useState } from "react";

import "../styles/design.scss";

import designData from "../data/designData";

import DesignFilter from "../components/DesignFilter";
import DesignSwiper from "../components/DesignSwiper";

const Design = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredData =
        activeCategory === "all"
            ? designData
            : designData.filter(
                  item => item.category === activeCategory
              );

    return (

        <section
            className="design-works"
            id="design"
        >

            <div className="design-inner">

                <h2 className="design-title">
                    Design Works
                </h2>

                <DesignFilter
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <DesignSwiper
                    items={filteredData}
                />

            </div>

        </section>

    );

};

export default Design;