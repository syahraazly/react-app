import CardProduct from "../components/fragment/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Lama",
    price: "Rp 1.000.000",
    image: "/images/shoes.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quo
          tenetur saepe vitae rem atque fugit vero, doloremque iusto aliquid.`,
  },
  {
    id: 2,
    name: "Sepatu baru",
    price: "Rp 1.000.000",
    image: "/images/shoes.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.desc}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
