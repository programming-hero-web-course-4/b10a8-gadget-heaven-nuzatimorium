import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Cards from "./Cards";
import Dashboard from "./Dashboard";
import WishList from "./WishList.jsx";
import CardDetails from "./CardDetails";
import Cart from "./Cart.jsx";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('../categories.json'),
          children: [
            {
              path: "/",
              element: <Cards></Cards>,
              loader: () => fetch("../products.json"),
            },
            {
              path: "/category/:category",
              element: <Cards></Cards>,
              loader: () => fetch("../products.json"),
            },
          ]
        },
        {
          path: "/Dashboard",
          element: <Dashboard></Dashboard>,
          children: [
            {
                path: "/Dashboard",
                element: <Cart></Cart>
            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "wishlist",
                element: <WishList></WishList>
            }
        ]
        },
        {
          path: "/cards/:id",
          element: <CardDetails></CardDetails>,
          loader: ({ params }) => fetch("../products.json")
              .then(res => res.json())
              .then(data => data.find(product => product.product_id === params.id)),
        }
      ]
    }
  ])

export default Router;