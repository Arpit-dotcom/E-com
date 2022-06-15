import { useProduct } from "contexts";
import { useNavigate } from "react-router-dom";

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
        <div className="deals">
          <img
            className="carousal"
            src="https://media.istockphoto.com/photos/woman-in-the-shop-to-buy-shoes-picture-id973374522?b=1&k=20&m=973374522&s=170667a&w=0&h=SGYpdFX6opwhyTW9AVPJUheRUbJg1xTcds_k_vcPzcY="
            alt="deals.img"
          />
        </div>
        <h1 className="home-heading">Sort By Categories</h1>
        <section className="sub-container">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => getCategoryHandler(item.category)}
              className="category-container"
            >
              <div className="retina">
                <h1 className="banner">{item.category}</h1>
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
