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
      {deals.map((sale,index) => (
        <>
          <Link className="deals" to="/product">
            <img className="carousal" src={sale.deal} alt="deals.img" />
          </Link>
          <section className="sub-container">
            {sale.data.map((item, index) => (
                <Link to="/product" key={index}>
                  <div className="retina">
                    <img className="img-size" src={item} alt="card-image" />
                  </div>
                </Link>
            ))}
          </section>
        </>
      ))}
    </main>
  </>
);

export { Main };
