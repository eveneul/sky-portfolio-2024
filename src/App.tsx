import { Component, useState } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import RoutesData from "./routes/Routes";
import { RecoilRoot } from "recoil";
import Layout from "./components/Layout";
import useScroll from "./hooks/use-scroll";

function App() {
  const lenis = useScroll();

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {RoutesData.map((route) => {
              let Component = route.component;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Component lenis={lenis} />}
                />
              );
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
