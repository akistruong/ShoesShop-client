import "./App.less";
import Header from "./components/Header";
import Filter from "./components/Filter";
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
