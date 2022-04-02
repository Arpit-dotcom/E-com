import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useProduct } from "contexts/ProductContext";
import { Card } from "./Card";

const Main = () => {
  const { filteredProducts } = useProduct();

  return (
    <>
      <Header />

      <section className="productContainer">
        <Sidebar />

        <main className="main-content">
          {filteredProducts &&
            filteredProducts.map(
              (item) => (
                <Card {...item} />
              )
            )}
          {!filteredProducts.length && <h1 className="product-empty">Loading...</h1>}
        </main>
      </section>
    </>
  );
};

export { Main };
