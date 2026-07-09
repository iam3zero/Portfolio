import "../styles/designFilter.scss";

import designCategories from "../data/designCategories.js";
import designData from "../data/designData.js";

const DesignFilter = ({
    activeCategory,
    setActiveCategory
}) => {

    return (

        <div className="design-filter">

            {

                designCategories.map((category)=>(

                    <button

                        key={category.id}

                        className={
                            activeCategory===category.id
                            ? "active"
                            : ""
                        }

                        onClick={()=>setActiveCategory(category.id)}

                    >

                        {category.label}

                    </button>

                ))

            }

        </div>

    );

};

export default DesignFilter;