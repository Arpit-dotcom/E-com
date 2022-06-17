import { Sort } from "./sort";
import { sortBy } from "staticData";
import { AiOutlineClose } from "react-icons/ai";

export const MobileSort = ({ setShowSort }) => {
  return (
    <section className="mobile-sort">
      <AiOutlineClose
        className="close"
        onClick={() => setShowSort((prev) => !prev)}
      />
      <Sort sortBy={sortBy} />
    </section>
  );
};
