import Cart from "../components/Cart";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

export const CartView = () => {
  return (
    <Layout>
      <div className="cart">
        <Pagination styles={"paginationCart"}/>
        <Cart />
      </div>
    </Layout>
  );
};
