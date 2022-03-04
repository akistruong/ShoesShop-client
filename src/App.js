import "./App.less";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { useDispatch, useSelector } from "react-redux";
function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Filter />
      </section>
    </div>
  );
}

export default App;
