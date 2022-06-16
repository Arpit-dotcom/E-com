import { useProduct } from "contexts";

export const Sort = ({ sortBy }) => {
  const { productDispatch, productState } = useProduct();
  const clickHandler = (category, value) => {
    productDispatch({ type: category, payload: value });
  };

  return (
    <>
      <h3 className="heading">SORTBY</h3>
      <ul className="sub-drawer stacked-list">
        {sortBy.map((item, index) => (
          <li className="list-item" key={index}>
            <label>
              <input
                style={{ cursor: "pointer" }}
                onChange={() => clickHandler("SORT", item.slice(8))}
                checked={
                  productState.sortBy &&
                  productState["sortBy"] === item.slice(8)
                }
                type="radio"
                name="sort"
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
