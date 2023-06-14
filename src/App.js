import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@rmwc/theme";

import Layout from "./layout/Layout.component";
import React from "react";
import { routes } from "./Routes";
import { WindowSizeListener } from "./components/WindowSizeListener";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider
          options={{
            primary: "#cd853f",
            secondary: "#179d46",
            onPrimary: "#fff",
          }}
        >
          <div>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
            <WindowSizeListener>
              <Layout>
                <Routes>
                  {routes.map((route, k) => (
                    <Route
                      key={k}
                      exact={route.exact}
                      path={route.path}
                      element={route.component}
                    />
                  ))}
                </Routes>
              </Layout>
            </WindowSizeListener>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
