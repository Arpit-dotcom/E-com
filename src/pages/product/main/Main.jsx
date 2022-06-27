import { Sidebar } from "./Sidebar";
import { useProduct } from "contexts/ProductContext";
import { Card } from "./Card";

const Main = () => {
  const { filteredProducts } = useProduct();

  return (
    <>
      <section className="productContainer">
        <Sidebar />

        {filteredProducts.length ? (
          <main className="main-content">
            {filteredProducts &&
              filteredProducts.map((item, index) => (
                <Card {...item} key={index} />
              ))}
          </main>
        ) : (
          <h1 className="product-empty">Loading...</h1>
        )}
      </section>
    </>
  );
};

export { Main };
