import { DrawerModal, Filter, Sort } from "components";
import { categories, ratings, sortBy } from "staticData";

const Sidebar = () => {
  return (
    <>
      <DrawerModal />
      <aside className="drawer">
        <Filter categories={categories} ratings={ratings} />
        <div className="margin-top-1 margin-bottom-1 divider"></div>
        <Sort sortBy={sortBy} />
      </aside>
    </>
  );
};

export { Sidebar };
