import { Link } from "react-router-dom";

const Main = ({ categories }) => {
  return (
    <>
      <header className="head">
        <p>
          <a className="home" href="#">
            <strong>Home</strong>
          </a>
          /
          <Link className="product" to="/product">
            Product
          </Link>
        </p>
      </header>

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
          {categories.map((item,index) => (
                <Link to={`/product/${item.category}`} key={index}>
                  <div className="retina">
                    <h1 className="banner">{item.category}</h1>
                    <img className="img-size" src={item.src} alt="card-image" />
                  </div>
                </Link>
            ))}
        </section>
      </main>
    </>
  );
};

export { Main };
