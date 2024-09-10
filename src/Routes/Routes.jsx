import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Workspace from "../Layouts/Workspace";
import LogOn from "../Pages/EnterCredentials/LogOn";
import CreateAccount from "../Pages/GetStarted/CreateAccount";
import Home from "../Pages/Home/Home/Home";
import Store from "../Pages/Store/Store";
import Web from "../Pages/Web/Web";
import Roles from "../Pages/Workspace/Roles/Roles";
import Users from "../Pages/Workspace/Users/Users";

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
            path: "/digital-offerings",
            element: <Store />
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
         }
      ]
   }
]);