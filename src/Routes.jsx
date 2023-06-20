import { Home } from "./pages/home";
import Contact from "./pages/contact";
import Strava from "./pages/Strava";
import CoreValues from "./pages/coreValues";
import { NotFound } from "components/NotFound";

export const routes = [
  {
    component: <CoreValues />,
    leftNav: true,
    name: "Core Values",
    path: "/core-values",
  },
  {
    component: <Contact />,
    leftNav: false,
    name: "Contact",
    path: "/contact-us",
  },
  {
    component: <Strava />,
    leftNav: false,
    name: "Login",
    path: "/login",
  },
  {
    component: <Home />,
    exact: true,
    leftNav: false,
    name: "Home",
    path: "/",
  },
];
