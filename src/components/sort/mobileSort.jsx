import { Sort } from "./sort";
import { sortBy } from "staticData";

export const MobileSort = () => {
  return (
    <section className="mobile-sort">
      <Sort sortBy={sortBy} />
    </section>
  );
};
