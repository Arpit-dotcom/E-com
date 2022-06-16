import { Filter } from "./filter";
import { categories, ratings } from "staticData";

export const MobileFilter = () => {
  return (
    <section className="mobile-filter">
      <Filter categories={categories} ratings={ratings} />
    </section>
  );
};
