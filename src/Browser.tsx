import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/Home";

export const Browser = () => {
  let [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(true);
  };

  const hideMenu = () => {
    setMenuState(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            menuState={menuState}
            showMenu={toggleMenu}
            hideMenu={hideMenu}
          />
        }
      />
    </Routes>
  );
};
