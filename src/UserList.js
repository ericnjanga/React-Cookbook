import React from "react";

function UserList() {
    const [user, setUser] = React.useState([]);

    const fetchData = () => {
        fetch('https://randomuser.me/api/?results=1')
        .then(response => response.json())
        .then(data => setUser(data));
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    // return <p>....</p>;

    return Object.keys(user).length > 0 ? (
        <div>
            <h1>Fetching user information</h1>
            <h2>First name: {user.results[0].name.first}</h2>
            <h2>Last name: {user.results[0].name.last}</h2>
        </div>
    ) : (
        <h1>Data Pending ...</h1>
    );
}

export default UserList;