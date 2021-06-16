import React, { useEffect, useState } from "react";
import { ViewUser } from "./ViewUser";

export const GetUser = ({ user }) => {
  useEffect(() => {
    searchUser();
  }, []);

  const [data, setdata] = useState({});
  const [repositories, setrepositories] = useState([]);

  const searchUser = async () => {
    const data = await fetch(`https://api.github.com/users/${user}`);
    const data2 = await data.json();

    const repositories = await fetch(data2.repos_url);
    const repositories2 = await repositories.json();

    setdata(data2);
    setrepositories(repositories2);
  };

  return (
    <div>
      <ViewUser data={data} repositories={repositories} />
    </div>
  );
};
