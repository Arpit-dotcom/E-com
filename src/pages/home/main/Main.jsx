import { Link } from "react-router-dom";
import { deals } from "staticData/data";

const Main = () => {
  return(
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
      {deals.map((sale,index) => (
        <>
          <div className="deals">
            <img className="carousal" src={sale.deal} alt="deals.img" />
          </div>
          <h1 className="home-heading">Sort By Categories</h1>
          <section className="sub-container">
            {sale.data.map((item) => (
                <Link to={`/product/${item.title}`}  >
                  <div className="retina">
                    <h1 className="banner">{item.title}</h1>
                    <img className="img-size" src={item.src} alt="card-image" />
                  </div>
                </Link>
            ))}
          </section>
        </>
      ))}
    </main>
  </>
)}

export { Main };
