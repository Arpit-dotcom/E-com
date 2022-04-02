import { Link } from "react-router-dom";
import { deals } from "staticData/data";

const Main = () => (
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
      {deals.map((sale) => (
        <>
          <img className="deals" src={sale.deal} alt="deals.img" />
          <section className="sub-container">
            {sale.data.map((item) => (
              <>
                <a href="#">
                  <div className="retina">
                    <img className="img-size" src={item} alt="card-image" />
                  </div>
                </a>
              </>
            ))}
          </section>
        </>
      ))}
    </main>
  </>
);

export { Main };
