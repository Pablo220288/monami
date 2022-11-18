import { useParams } from "react-router-dom";
import Item from "../components/Item";
import Layout from "../components/Layout";
import PRODUCTOS from "../mocks/products";

export const GenderView = () => {
  const { genero } = useParams();
  const genders = PRODUCTOS.filter((product) => product.genero === genero);

  return (
    <Layout>
      <div
        className={`backgroundGender ${
          genero === "Mujer" ? "mujer" : "hombre"
        }`}
      >
        {genero === "Mujer" ? (
          <p className="genderSlogan">
            Todo lo que <strong>ELLAS</strong> quieren..
          </p>
        ) : (
          <p className="genderSlogan">
            Lo que <strong>ELLOS</strong> buscan..
          </p>
        )}
      </div>
      <h3 className="genderTitle">Vetements</h3>
      <div className="cardProduct_conten genders">
        {genders.map((produc) => (
          <Item product={produc} key={produc.id} />
        ))}
      </div>
    </Layout>
  );
};
