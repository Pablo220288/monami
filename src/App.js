import "./sass/styles.scss";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer
          greeting={"Hola Coder..!! Bienvenidos a mi Poryecto React.js"}
        />
      </main>
    </div>
  );
}

export default App;
