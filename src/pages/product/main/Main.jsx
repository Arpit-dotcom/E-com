import { Header } from "./Header";
import {Sidebar} from "./Sidebar";
import {products} from "./Dump";

const Main = () => (
  <>
    <Header />

    <section class="container">
      <Sidebar />

      <main class="main-content">
        {products.map((product) => (
          <>
            <section class="card badge-card">
              <img
                class="img"
                src={product}
                alt="card-image"
              />
              <br />
              <div class="card-text">
                <h2>BrandName</h2>
                <p>Brandproduct series</p>
                <small>
                  <strong>Price</strong>
                </small>
              </div>
            </section>
          </>
        ))}
      </main>
      
    </section>
  </>
);

export {Main}