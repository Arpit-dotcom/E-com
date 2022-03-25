const categories = [
  "Headphones",
  "Shoes",
  "Lipstick",
  "Earphone",
  "Watch",
  "Face Wash",
  "Sunglasses",
  "Bag"
];

const ratings = [
  "4 star and above",
  "3 star and above",
  "2 star and above",
  "1 star and above",
];

const sortBy = ["Price - High to Low", "Price - Low to High"];

const Sidebar = () => (
  <>
    <aside className="drawer">
      <h1 className="heading">CATEGORIES</h1>
      {categories.map((category) => (
        <>
          <ul className="sub-drawer stacked-list">
            <li className="list-item">
              <label>
                <input type="checkbox" />
                {category}
              </label>
            </li>
          </ul>
        </>
      ))}

      <h1 className="heading">RATING</h1>
      {ratings.map((rating) => (
        <>
          <ul className="sub-drawer stacked-list">
            <li className="list-item">
              <label>
                <input type="checkbox" />
                {rating}
              </label>
            </li>
          </ul>
        </>
      ))}

      <h1 className="heading">SORTBY</h1>
      {sortBy.map((item) => (
        <>
          <ul className="sub-drawer stacked-list">
            <li className="list-item">
              <label>
                <input type="checkbox" />
                {item}
              </label>
            </li>
          </ul>
        </>
      ))}
    </aside>
  </>
);

export { Sidebar };
