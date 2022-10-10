import React from "react";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import routeName from "../Routes/RouteNames";
const navbar = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <NavLink to={routeName.root}>
        <Navbar.Brand>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink to={routeName.Registration}>
          <Navbar.Link>Registration</Navbar.Link>
        </NavLink>
        <NavLink to={routeName.Users}>
          <Navbar.Link>Users</Navbar.Link>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
