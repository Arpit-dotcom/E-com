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
      {deals.map((sale) => (
        <>
          <Link className="deals" to="/product">
            <img className="carousal" src={sale.deal} alt="deals.img" />
          </Link>
          <section className="sub-container">
            {sale.data.map((item) => (
              <>
              {console.log(item.title)}
                <Link to={`/product/${item.title}`}  >
                  <div className="retina">
                    <img className="img-size" src={item.src} alt="card-image" />
                  </div>
                </Link>
              </>
            ))}
          </section>
        </>
      ))}
    </main>
  </>
)}

export { Main };
