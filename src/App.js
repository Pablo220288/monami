import "./sass/styles.scss";
import NavBar from "./components/NavBar.js";
//import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.js";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        {/* <ItemListContainer
          greeting={"Hola Coder..!! Bienvenidos a mi Poryecto React.js"}
        /> */}
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
