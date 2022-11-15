import ItemDatail from "./ItemDatail";

const ItemDetailContainer = ({ product, isOpen, closeModal }) => {
  return (
    <div className={`itemDetailContainer ${isOpen && 'details-open'}`} onClick={closeModal}>
      <ItemDatail product={product} closeModal={closeModal}/>
    </div>
  );
};

export default ItemDetailContainer;
