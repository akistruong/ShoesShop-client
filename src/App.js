import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AdminRouter from "./admin/features";
import { Suspense } from "react";
function App() {
  console.log("APP RERENDER");
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            {AdminRouter.map((item) => (
              <Route path={item.path} element={item.element} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
