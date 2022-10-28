import React from "react";

export const SignInPage = ({ login }) => {
  return (
    <>
      <h1>Sign In</h1>
      <button
        className="bg-purple-300 text-purple-900 py-2 px-6 rounded-md cursor-pointer"
        onClick={login}
      >
        Login
      </button>
    </>
  );
};
