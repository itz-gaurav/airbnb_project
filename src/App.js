import "./App.css";
import Header from "./components/Header";
import Cards from "./components/cards";
import Filter from "./components/filter";

function App() {
  return <div className="App">
    <Header />
    <Filter />
    <Cards />
  </div>;
}

export default App;
