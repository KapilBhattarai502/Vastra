import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainLayout from "./Layouts/MainLayout.jsx";
// import Homepage from "./pages/Homepage.jsx";
// import MenFashion from "./pages/MenFashion.jsx";
// import WomenFashion from "./pages/WomenFashion.jsx";
// import FashionDetails from "./pages/FashionDetails.jsx";
// import Loginpage from "./pages/Loginpage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "",
//         element: <Homepage />,
//       },
//       {
//         path: "/mensfashion",
//         element: <MenFashion />,
//       },
//       {
//         path: "/womensfashion",
//         element: <WomenFashion />,
//       },
//       { path: "/mensfashion/:id", element: <FashionDetails /> },
      
//     ],
//   },
//   { path: "/login", element: <Loginpage /> },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <App/>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
