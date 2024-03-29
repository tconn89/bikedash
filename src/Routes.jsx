import { Home } from "./pages/home";
import Strava from "./pages/Strava";
import CoreValues from "./pages/coreValues";
import { ContactTemporary } from "pages/contactTemporary";
import { AluminumDeckRail } from "pages/projects/AluminumDeckRail";
import { CoveredPorch } from "pages/projects/CoveredPorch";
import { PrintableBrochure } from "pages/printableBrochure/PrintableBrochure";

export const routes = [
  {
    component: <CoreValues />,
    leftNav: true,
    name: "Core Values",
    path: "/core-values",
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
  {
    component: <ContactTemporary />,
    exact: true,
    leftNav: true,
    name: "Contact Us",
    path: "/contact-us",
  },
  {
    component: <AluminumDeckRail />,
    leftNav: false,
    path: "/decking-project-3",
  },
  {
    component: <CoveredPorch />,
    leftNav: false,
    path: "/decking-project-6",
  },
  {
    component: <PrintableBrochure />,
    leftNav: false,
    path: "/brochure-1",
  },
];
