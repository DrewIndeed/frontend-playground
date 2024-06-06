import Layout from "@/layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("@/projects/home/HomePage"));
const MetalabPage = lazy(() => import("@/projects/metalab/pages/MetalabHomePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "metalab",
    element: <MetalabPage />,
  },
  {
    path: "/*",
    element: <div>Damn, your imagination is good huh !? Go back home plz.</div>,
  },
]);
