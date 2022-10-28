import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { DashboardPage } from "./pages/DashboardPage";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Daniel" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <nav className="w-max mx-auto space-x-4 py-10 text-xl font-bold">
        <Link to="/">Home</Link>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/dashboard">Dashboard</Link>
        {user && (
          <button
            className="bg-red-300 text-red-900 py-2 px-6 rounded-md text-base"
            onClick={logout}
          >
            Log Out
          </button>
        )}
      </nav>
      <main className="max-w-screen-lg mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage login={login} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
