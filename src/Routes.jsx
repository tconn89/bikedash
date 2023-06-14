import { Home } from "./pages/home";
import Contact from "./pages/contact";
import Strava from "./pages/Strava";
import CoreValues from "./pages/coreValues";

export const routes = [
  {
    component: <CoreValues />,
    leftNav: false,
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
    leftNav: true,
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
