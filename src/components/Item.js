import CantCart from "./CantCart";

const Item = ({ product }) => {
  return (
    <div>
      <li key={product.id} className="cardProduct">
        <div className="productImg">
          <img src={product.img1} alt=""></img>
        </div>
        <div className="productItem">
          <h2 className="title">{product.title}</h2>
          <p className="category">{product.category}</p>
        </div>
        <div className="productItem">
          <h2 className="infoTitle">Descripción</h2>
          <p className="infoText">{product.description}</p>
        </div>
        <div className="productItem">
          <div className="colors_size">
            <div className="colors">
              <h2>Color</h2>
              <div className="bottomColors">
                <button className="color"></button>
                <button className="color"></button>
              </div>
            </div>
            <div className="sizes">
              <h2>Talle</h2>
              <div className="bottomSizes">
                <button className="size">S</button>
                <button className="size">M</button>
                <button className="size">L</button>
                <button className="size">XL</button>
              </div>
            </div>
          </div>
        </div>
        <div className="productItem">
          <div className="card_price">
            <CantCart />
            <div className="price-conten">
              <p>$</p>
              <p className="price">{`${product.price},00`}</p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Item;
