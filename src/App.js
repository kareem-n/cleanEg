import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Reports from "./components/reports/Reports";
import CreateAdmin from "./components/createAdmin/CreateAdmin";

function App() {
  const [adminExist, setAdminExist] = useState(false);

  function ProtectRoute({ children }) {
    if (localStorage.getItem("userToken")) {
      return children;
    } else {
      return <Navigate to={"/login"} />;
    }
  }

  useEffect(() => {
    setAdminExist(localStorage.getItem("isLogged"));
  }, []);

  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectRoute>
                <Home />
              </ProtectRoute>
            }
          >
            <Route
              path="/allReports"
              element={
                <ProtectRoute>
                  <Reports />
                </ProtectRoute>
              }
            />
          </Route>


          <Route path="/createAdmin" element={<ProtectRoute>
            <CreateAdmin /> 
          </ProtectRoute> } />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
