import { Link } from "react-router-dom";
import { deals } from "staticData/data";

const Main = () => (
  <>
    <header class="head">
      <p>
        <a class="home" href="#">
          <strong>Home</strong>
        </a>
        /
        <Link class="product" to="/product">
          Product
        </Link>
      </p>
    </header>

    <main class="container">
      {deals.map((sale) => (
        <>
          <img class="deals" src={sale.deal} alt="deals.img" />
          <section class="sub-container">
            {sale.data.map((item) => (
              <>
                <a href="#">
                  <div class="retina">
                    <img class="img-size" src={item} alt="card-image" />
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

export {Main};
