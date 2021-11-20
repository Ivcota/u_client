import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { useAuthStore } from "./global/authState";
import Dashboard from "./pages/authenticated/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const { restoreAuth } = useAuthStore();

  useEffect(() => {
    restoreAuth();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
