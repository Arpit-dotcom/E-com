import { Filter } from "./filter";
import { categories, ratings } from "staticData";
import { AiOutlineClose } from "react-icons/ai";

export const MobileFilter = ({ setShowFilter }) => {
  return (
    <section className="mobile-filter">
      <AiOutlineClose
        className="close"
        onClick={() => setShowFilter((prev) => !prev)}
      />
      <Filter categories={categories} ratings={ratings} />
    </section>
  );
};
