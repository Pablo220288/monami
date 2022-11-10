import "./sass/styles.scss";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer";
import CardProduct from "./components/CardProduct";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer
        greeting={"Hola Coder..!! Bienvenidos a mi Poryecto React.js"}
      />
    </div>
  );
}

export default App;
