import "./App.less";
import Header from "./components/Header";
import Filter from "./components/Filter";
import ProductList from "./features/Product/components/ProductList";
import { useDispatch, useSelector } from "react-redux";
function App() {
  console.log("APP RERENDER");
  return (
    <div className="App">
      <Header />
      <section className="Ahihi">
        <Filter />
        <ProductList />
      </section>
    </div>
  );
}

export default App;
