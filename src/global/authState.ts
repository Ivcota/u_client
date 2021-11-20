import create from "zustand";

interface AuthState {
  username: string;
  email: string;
  token: string;
  authenticated: boolean;
}

interface AuthStateZ extends AuthState {
  setAuth: (username: string, email: string, token: string) => void;
  logout: () => void;
  restoreAuth: () => void;
}

export const useAuthStore = create<AuthStateZ>((set) => ({
  username: "",
  email: "",
  token: "",
  authenticated: false,
  setAuth: (username, email, token) => {
    const authState: AuthState = {
      username,
      email,
      token,
      authenticated: true,
    };
    // Set Authentication info to the localstorage
    localStorage.setItem("authInfo", JSON.stringify(authState));

    set((state) => ({
      email,
      username,
      token,
      authenticated: true,
    }));
  },
  logout: () => {
    const authState: AuthState = {
      username: "",
      email: "",
      token: "",
      authenticated: false,
    };

    // Set Authentication info to the localstorage
    localStorage.setItem("authInfo", JSON.stringify(authState));

    set((state) => {
      return {
        authenticated: false,
        email: "",
        token: "",
        username: "",
      };
    });
  },
  restoreAuth: () => {
    // Local Storage
    const stringedAuth = localStorage.getItem("authInfo");
    const authState: AuthState = JSON.parse(stringedAuth as string);

    set((state) => {
      return authState;
    });
  },
}));
