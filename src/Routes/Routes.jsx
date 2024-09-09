import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import LogOn from "../Pages/EnterCredentials/LogOn";
import CreateAccount from "../Pages/GetStarted/CreateAccount";
import Home from "../Pages/Home/Home/Home";

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
         }
      ]
   },
]);