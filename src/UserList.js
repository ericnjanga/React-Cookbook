import React from "react";

function UserList() {
  const [user, setUser] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=1");

      // Throws an error if there is an HTTP issue
      if (!response.ok) {
        throw new Error(`HTTP Error. Status: ${response.status}`);
      }
      // Otherwise, parse the response
      const data = await response.json();

      // Throws an error is the response structure is invalid
      if (!data) {
        throw new Error("Invalid data type");
      }

      // Otherwise update the state
      setUser(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Fetching user information</h1>
      <h2>First name: {user.results[0].name.first}</h2>
      <h2>Last name: {user.results[0].name.last}</h2>
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    <h1>Data Pending ...</h1>
  );
}

export default UserList;
