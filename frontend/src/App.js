import HDashboard from "./components/HR/HDashboard";
// import Navbar from "./components/HR/Navbar";
// import Navbar from "./components/HR/TableData";

import Dashboard from "./components/Employee/Dashboard";
import Navbar from "./components/Employee/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Login from "./components/Login";
import Register from "./components/Register";
import Addcomplain from "./components/Employee/Addcomplain";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/hr-dashboard" element={<HDashboard />} />

        <Route path="/emp-dashboard" element={<Dashboard />} />
        <Route path="/emp-addcomplain" element={<Addcomplain />} />


        <Route path="/adm-dashboard" element={<Dashboard />} />
        {/* <Route path="/eadm-addcomplain" element={<Addcomplain />} /> */}

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
