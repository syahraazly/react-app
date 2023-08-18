import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/fragment/CardProduct";
import Counter from "../components/fragment/Counter";
import { getProduct } from "../services/product.services";
import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/layouts/Navbar";
import TableCart from "../components/fragment/Tablecart";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
    <Navbar/>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products}/>
        </div>
      </div>
      <div className="flex w-100 justify-center">
        <Counter />
      </div>
    </Fragment>
  );
};

export default ProductPage;
