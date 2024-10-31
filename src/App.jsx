import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Homepage from "./pages/Homepage";
import MenFashion from "./pages/MenFashion";
import WomenFashion from "./pages/WomenFashion";
import Loginpage from "./pages/Loginpage";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext/AuthContext";
import FashionDetails from "./pages/FashionDetails";


const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="homepage" element={<Homepage />} />
            <Route
              path="clothes"
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route path="men" element={<MenFashion />} />
              <Route path="men/:id" element={<FashionDetails/>} />
              <Route path="women" element={<WomenFashion />} />
              


            </Route>
            <Route path="login" element={<Loginpage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
