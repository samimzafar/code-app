import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routesNames from "../Routes/RouteNames";
import { addUser } from "../Services/User.Services";
const Form = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    var modal = {
      firstName,
      lastName,
      city,
    };
    const response = await addUser(modal);
    navigate(routesNames.Users);
    return response;
  };
  return (
    <form className="flex flex-col gap-4 mx-6">
      <div>
        <div className="mb-2">
          <Label htmlFor="firstName" value="First Name" />
        </div>
        <TextInput
          id="firstName"
          type="text"
          placeholder="firstName"
          required={true}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2">
          <Label htmlFor="lastName" value="Last Name" />
        </div>
        <TextInput
          id="lastName"
          type="text"
          placeholder="lastName"
          required={true}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2">
          <Label htmlFor="city" value="city" />
        </div>
        <TextInput
          id="city"
          type="text"
          placeholder="city"
          required={true}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
