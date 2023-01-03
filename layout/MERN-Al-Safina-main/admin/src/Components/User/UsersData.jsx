import React, { useState, useEffect } from "react";
import LoadingSpinner from "../Shared/spinner";

function UsersData() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "user/getall"
        );
        const responseData = await response.json();
        console.log(responseData.users);
        setUsers(responseData.users);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);

        console.log(err.message || "Something went wrong, please try again.");
      }
    };

    fetchUsers();
  }, []);

  if (users.length === 0 && !isLoading) {
    return (
      <div className="border p-2 rounded">
        <h3 className="text-secondary text-center">No User Found</h3>
      </div>
    );
  }

  return (
    <div className="border p-2 rounded">
      {isLoading && <LoadingSpinner asOverlay />}

      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>Users</h5>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="Search here"
            onChange={(search) => setSearch(search.target.value)}
          />
        </div>
      </div>
      {users
        .filter((val) => {
          var result;
          if (search === "") {
            result = val;
          } else if (
            val.name.toLowerCase().includes(search.toLowerCase())
          ) {
            result = val;
          }
          return result;
        })
        .map((e) => (
          <div className="p-2 my-2 rounded bg-light">
            <p className="m-0 p-0">
              <strong>Name: </strong>
              {e.name}
            </p>
            <p className="m-0 p-0">
              <strong>Phone Number: </strong>
              {e.phone}
            </p>
            <p className="m-0 p-0">
              <strong>Address: </strong>
              {e.address}
            </p>
          </div>
        ))}
    </div>
  );
}

export default UsersData;
