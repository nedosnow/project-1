import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import "./index.css";
import MainPage from "./pages/main-page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="red-panda" element={<MainPage />} />
        <Route path="*" element={<Navigate to="red-panda" replace={true} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
