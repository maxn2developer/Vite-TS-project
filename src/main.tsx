import App from "./App";
import "./index.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import router from "./route/routers";
import { RouterProvider } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>

//   </React.StrictMode>
// );
