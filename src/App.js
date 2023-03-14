import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/home/dashborad/DashBoard";
import Team from "./components/home/Team";
import Contact from "./components/home/Contact";
import Invoice from "./components/home/Invoice";
import ProfileForm from "./components/home/ProfileForn";
import Calendar from "./components/home/Calendar";
import Faq from "./components/home/Faq";
import BarChart from "./components/home/BarChart";
import LineChart from "./components/home/LineChart";
import Geography from "./components/home/Geography";

import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <DashBoard /> },
      { path: "/team", element: <Team /> },
      { path: "/contacts", element: <Contact /> },
      { path: "/invoices", element: <Invoice /> },
      { path: "/form", element: <ProfileForm /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/faq", element: <Faq /> },
      { path: "/bar", element: <BarChart /> },
      { path: "/line", element: <LineChart /> },
      { path: "/geography", element: <Geography /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
