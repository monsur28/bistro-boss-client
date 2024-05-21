import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Main/Menu/Menu";
import Order from "../Pages/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourmenu",
        element: <Menu></Menu>,
      },
      {
        path: "/ourshop/:category",
        element: <Order></Order>,
      },
    ],
  },
]);

export default router;
