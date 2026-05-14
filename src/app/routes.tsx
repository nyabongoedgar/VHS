import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { CoffeeSupply } from "./components/CoffeeSupply";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "coffee-supply", Component: CoffeeSupply },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
