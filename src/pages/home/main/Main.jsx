import { useProduct } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Main = ({ categories }) => {
  const navigate = useNavigate();
  const { productDispatch } = useProduct();

  const getCategoryHandler = (category) => {
    productDispatch({ type: "CATEGORIES", payload: category });
    navigate("/product");
  };

  return (
    <>
      <main className="container">
        <section className="banner">
          <div className="banner-container">
            <div className="banner-text">
              <h1 className="banner-text-heading">
                Shop for various products and deals.
              </h1>
              <Link to="/product" className="banner-text-button">
                SHOP NOW
                <AiOutlineRight className="banner-arrow" />
              </Link>
            </div>
          </div>
        </section>
        <h1 className="home-heading">Sort By Categories</h1>
        <section className="sub-container">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => getCategoryHandler(item.category)}
              className="category-container"
            >
              <div className="retina">
                <h1 className="text-overlay">{item.category}</h1>
                <img className="img-size" src={item.src} alt="card-image" />
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export { Main };
