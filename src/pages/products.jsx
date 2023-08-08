import Button from "../components/elements/button";
import CardProduct from "../components/fragment/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quo
          tenetur saepe vitae rem atque fugit vero, doloremque iusto aliquid.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
