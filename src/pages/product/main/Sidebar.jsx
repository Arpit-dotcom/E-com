import {categories, ratings, sortBy, filterBy} from "./Dump"

const Sidebar = () => (
  <>
    <aside class="drawer">
      <h1 class="heading">CATEGORIES</h1>
      {categories.map((category) => (
        <>
          <ul class="sub-drawer stacked-list">
            <li class="list-item">
              <label>
                <input type="checkbox" />
                {category}
              </label>
            </li>
          </ul>
        </>
      ))}

      <h1 class="heading">RATING</h1>
      {ratings.map((rating) => (
        <>
          <ul class="sub-drawer stacked-list">
            <li class="list-item">
              <label>
                <input type="checkbox" />
                {rating}
              </label>
            </li>
          </ul>
        </>
      ))}

      <h1 class="heading">SORTBY</h1>
      {sortBy.map((item) => (
        <>
          <ul class="sub-drawer stacked-list">
            <li class="list-item">
              <label>
                <input type="checkbox" />
                {item}
              </label>
            </li>
          </ul>
        </>
      ))}

      <h1 class="heading">FILTERBY</h1>
      {filterBy.map((item) => (
        <>
          <ul class="sub-drawer stacked-list">
            <li class="list-item">
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
