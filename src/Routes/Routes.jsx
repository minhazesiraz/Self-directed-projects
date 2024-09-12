import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Workspace from "../Layouts/Workspace";
import DetailOfStores from "../Pages/DetailOfStores/DetailOfStores";
import LogOn from "../Pages/EnterCredentials/LogOn";
import CreateAccount from "../Pages/GetStarted/CreateAccount";
import Home from "../Pages/Home/Home/Home";
import Store from "../Pages/Stores/Stores";
import Web from "../Pages/Web/Web";
import Roles from "../Pages/Workspace/Roles/Roles";
import PayWithStripe from "../Pages/Workspace/Stripe/PayWithStripe";
import Users from "../Pages/Workspace/Users/Users";
import YourCarts from "../Pages/Workspace/YourCarts/YourCarts";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />
         },
         {
            path: "log-in",
            element: <LogOn />
         },
         {
            path: "create-an-account",
            element: <CreateAccount />
         },
         {
            path: "services/web-pages",
            element: <Web />
         },
         {
            path: "digital-offerings",
            element: <Store />,
         },
         {
            path: "digital-offerings/:pid",
            element: <DetailOfStores />,
            loader: ({ params }) => fetch(`http://localhost:5000/APIs/digital-offerings/${params.pid}`)
         }
      ]
   },
   {
      path: "/workspace",
      element: <Workspace />,
      children: [
         {
            path: "users",
            element: <Users />
         },
         {
            path: "users/:uid",
            element: <Roles />,
            loader: ({ params }) => fetch(`http://localhost:5000/APIs/users/${params.uid}`)
         },
         {
            path: "your-carts",
            element: <YourCarts />
         },
         {
            path: "create-payment",
            element: <PayWithStripe />
         }
      ]
   }
]);