import React, { useState } from "react";
import { GetUser } from "./GetUser";
import { Input } from "./Input";
import { NavBar } from "../design/NavBar";

export const Home = () => {
  const [user, setuser] = useState([]);

  return (
    <div>
      <NavBar />
      <Input setuser={setuser} />
      {user.map((user, i) => (
        <GetUser key={i} user={user} />
      ))}
    </div>
  );
};
