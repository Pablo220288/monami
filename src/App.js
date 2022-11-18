import BackgroundHome from "./components/BackgroundHome";
//import ItemDetailContainer from "./components/ItemDetailContainer.js";
import ItemListContainer from "./components/ItemListContainer";
import Layout from "./components/Layout";
import "./sass/styles.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <main>
          <BackgroundHome />
          <ItemListContainer
            greeting={"Hola Coder..!! Bienvenidos a mi Poryecto React.js"}
          />
        </main>
      </Layout>
    </div>
  );
}

export default App;
