import Layout from "@/layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home/HomePage"));
const MetalabPage = lazy(() => import("@/pages/metalab/MetalabPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // add route objects here
      {
        path: "/metalab",
        element: <MetalabPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <div>Damn, your imagination is good huh !? Go back home plz.</div>,
  },
]);
