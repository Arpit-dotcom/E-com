import { useProduct } from "contexts";
import { Link } from "react-router-dom";

export const Filter = ({ categories, ratings }) => {
  const { productDispatch, productState } = useProduct();

  const clickHandler = (category, value) => {
    productDispatch({ type: category, payload: value });
  };
  const isCategoryChecked = (categories, category) => {
    return categories.includes(category);
  };
  return (
    <>
      <div className="filter">
        <h2>Filters</h2>
        <Link
          to="/product"
          className="clear-filter"
          onClick={() => productDispatch({ type: category })}
        >
          Clear Filters
        </Link>
      </div>
      <div className="margin-top-1 margin-bottom-1 divider"></div>
      <h3 className="heading">CATEGORIES</h3>
      <ul className="sub-drawer stacked-list">
        {categories.map((category, index) => (
          <li className="list-item" key={index}>
            <label>
              <input
                style={{ cursor: "pointer" }}
                onChange={() => clickHandler("CATEGORIES", category)}
                type="checkbox"
                checked={
                  productState.categories.length &&
                  isCategoryChecked(productState.categories, category)
                }
              />
              {category}
            </label>
          </li>
        ))}
      </ul>

      <div className="margin-top-1 margin-bottom-1 divider"></div>

      <h3 className="heading">RATING</h3>
      <ul className="sub-drawer stacked-list">
        {ratings.map((item, index) => (
          <li className="list-item" key={index}>
            <label>
              <input
                style={{ cursor: "pointer" }}
                onChange={() => clickHandler("RATING", item)}
                checked={productState.rating && productState["rating"] === item}
                type="radio"
                name="rating"
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
