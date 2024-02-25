import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AllProjectsPage from "./pages/AllProjectsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateUserPage from "./pages/CreateUserPage.jsx";
import CreateProjectsPage from "./pages/CreateProjectPage.jsx";
import App from "./components/App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/project/:id",
        element: <ProjectPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/projects",
        element: <AllProjectsPage />,
      },
      {
        path: "/create-account",
        element: <CreateUserPage />,
      },
      {
        path: "/create-project",
        element: <CreateProjectsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so they render */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
