import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Contacts from "./components/contacts";
import About from "./components/About";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;