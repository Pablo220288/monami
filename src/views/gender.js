import { useParams } from "react-router-dom";
import Item from "../components/Item";
import Layout from "../components/Layout";
import { collection, query, getFirestore, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const GenderView = () => {
  const { genero } = useParams();
  const [gender, setGender] = useState([])

  useEffect(() => {
    getDocs(query(collection(getFirestore(), "products"), where("genero", '==', genero)))
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => doc.data())
        setGender(products)
      })
  }, [genero]);

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
        {gender.map((produc) => (
          <Item product={produc} key={produc.id} />
        ))}
      </div>
    </Layout>
  );
};
