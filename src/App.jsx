import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="w-max mx-auto space-x-4 py-10 text-xl font-bold">
        <Link to="/">Home</Link>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <main className="max-w-screen-lg mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
