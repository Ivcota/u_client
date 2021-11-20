import React from "react";
import { useAuthStore } from "../global/authState";
import { PrimaryButton } from "./styledCards";

const LogOut: React.FC = ({ children }) => {
  // Use state from the authstore
  const { logout } = useAuthStore();

  return (
    <PrimaryButton onClick={() => logout()}>
      {!children ? "Logout" : children}{" "}
    </PrimaryButton>
  );
};

export default LogOut;
