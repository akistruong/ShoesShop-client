import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Filter from "./components/Filter";
import AdminRouter from "./admin/features";
import UserRouter from "./features";
import { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useAuth from "./hooks/useAuth";
const NULL = () => {
  return <h1>NULL</h1>;
};
function App() {
  const { Auth } = useAuth();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.Auth.isAdmin);
  const isUser = useSelector((state) => state.Auth.isUser);
  useEffect(() => {
    console.log("APP RERENDER");
    Auth();
  }, []);

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
          <Routes>
            {UserRouter.map((item) => {
              return item.private ? (
                <Route
                  path={item.path}
                  element={isUser || isAdmin ? item.element : <NULL />}
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
