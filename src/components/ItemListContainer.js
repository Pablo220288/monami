import CantCart from "./CantCart";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemListContainer">
      <div>{greeting}</div>
      <CantCart />
    </div>
  );
};

export default ItemListContainer;
