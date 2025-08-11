import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RoteLayout from "./RouteLayout/RoteLayout.jsx";
import ProjectDetails from "./components/ProjectDeatils/ProjectDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RoteLayout,
  },
  {
    path: "/projects/:id",
    Component: ProjectDetails,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
