import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AdminRouter from "./admin/features";
import { Suspense, useEffect } from "react";
import { Selector } from "./features/Auth/AuthSlice";
import { useSelector, useDispatch } from "react-redux";
const NULL = () => {
  return <h1>NULL</h1>;
};
function App() {
  useEffect(() => {}, []);
  const isAdmin = useSelector(Selector.getIsAdmin);

  console.log("APP RERENDER");
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            {AdminRouter.map((item) => {
              return item.private ? (
                <Route
                  path={item.path}
                  element={isAdmin ? item.element : <NULL />}
                />
              ) : (
                <Route path={item.path} element={item.element}></Route>
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
