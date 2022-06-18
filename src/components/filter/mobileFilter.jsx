import { Filter } from "./filter";
import { categories, ratings } from "staticData";
import { AiOutlineClose } from "react-icons/ai";

export const MobileFilter = ({ setShowFilter }) => {
  return (
    <section className="mobile-filter">
      <div className="mobile-filter-container">
        <AiOutlineClose
          className="close"
          onClick={() => setShowFilter((prev) => !prev)}
        />
        <Filter categories={categories} ratings={ratings} />
      </div>
    </section>
  );
};
