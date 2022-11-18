import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AllProductView } from "../views/allProduct";
import { GenderView } from "../views/gender";
import { CategoryView } from "../views/category";
import { DetailsView } from "../views/details";

export const router = createBrowserRouter([
  {
    path: "/monamie",
    element: <App />,
  },
  {
    path: "/products",
    element: <AllProductView />,
  },
  {
    path: "/products/genero/:genero",
    element: <GenderView />,
  },
  {
    path: "/category/:category",
    element: <CategoryView />,
  },
  {
    path: "/product/:product",
    element: <DetailsView />,
  },
]);
