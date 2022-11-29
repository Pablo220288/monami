import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <ul className="cardProduct_conten">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default ItemList;
