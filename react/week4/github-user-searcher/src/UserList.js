import React, { useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

const githubApiLink = "https://api.github.com/search/users?q=";

function UserList() {
  const userContext = useContext(UserContext);
  const getAllUsers = () => {
    if (userContext.input !== "") {
      userContext.setLoading(true);
      fetch(githubApiLink + userContext.input)
        .then((response) => response.json())
        .then((data) => {
          userContext.setLoading(false);
          if (data.message) {
            userContext.setMessage(data.message);
          } else if (data.total_count === 0) {
            userContext.setMessage("No results...");
          } else {
            userContext.setUsers(data.items.map((item) => item.login));
          }
        });
    }
  };
  useEffect(() => {
    getAllUsers();
  }, [userContext.input]);

  const handleChange = (event) => {
    userContext.setInput(event.target.value);
  };

  const setInitialState = () => {
    userContext.setInput("");
    userContext.setLoading(false);
    userContext.setUsers([]);
    userContext.setMessage("");
    window.location.reload();
  };

  const getUserRepo = (event) => {
    const profileName = event.target.innerHTML;
    fetch(githubApiLink + profileName)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const userLogin = data.items.filter(
            (profile) => profile.login === profileName
          );
          const reposLink = userLogin[0].repos_url;
          event.target.setAttribute("href", reposLink);
        }
      });
  };

  return (
    <div>
      <h3>
        Click on any of the following links to check out the repos of that user
      </h3>
      <input
        type="text"
        name="user"
        id="user"
        placeholder="search for user"
        value={userContext.input}
        onChange={handleChange}
      />
      {userContext.loading ? (
        <h5>loading...</h5>
      ) : !userContext.loading &&
        userContext.input !== "" &&
        userContext.message === "" ? (
        <ul>
          {userContext.users.map((user, index) => (
            <li key={index}>
              <a onClick={getUserRepo} target="_blank">
                {user}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <h5>{userContext.message}</h5>
      )}
      <button onClick={setInitialState}>Refresh</button>
    </div>
  );
}

export default UserList;
