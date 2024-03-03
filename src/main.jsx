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
import Custom404 from "./pages/Custom404Page.jsx";
import Success from "./pages/SuccessPage.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";
import Toggle from "./components/Toggle.jsx";

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
      {
        path: "/404",
        element: <Custom404 />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* Here we wrap our app in the router provider so they render */}
      <Toggle />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
