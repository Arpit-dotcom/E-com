import "styles/DrawerModal.css";
import { MdSort, MdOutlineFilterAlt } from "react-icons/md";
import { useState } from "react";
import { MobileFilter, MobileSort } from "components";

export const DrawerModal = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  return (
    <>
      {showSort && <MobileSort setShowSort={setShowSort} />}
      {showFilter && <MobileFilter setShowFilter={setShowFilter} />}
      {(!showFilter && !showSort) && (
        <section className="drawer-modal">
          <button
            className="drawer-modal-button"
            onClick={() => setShowSort((prev) => !prev)}
          >
            <MdSort className="drawer-modal-icons" />
            Sort
          </button>
          <button
            className="drawer-modal-button"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            <MdOutlineFilterAlt className="drawer-modal-icons" />
            Filter
          </button>
        </section>
      )}
    </>
  );
};
