import React from "react";
import { Route, Routes } from "react-router-dom";
import { Registration, Users } from "../Pages/";
import routesNames from "./RouteNames";
const Routing = () => {
  return (
    <Routes>
      <Route path={routesNames.root} element={<Registration />} />
      <Route path={routesNames.Registration} element={<Registration />} />
      <Route path={routesNames.Users} element={<Users />} />
      <Route
        path={routesNames.NotFound}
        element={
          <>
            <h1>Page Not Found 404 ! </h1>
          </>
        }
      />
    </Routes>
  );
};

export default Routing;
