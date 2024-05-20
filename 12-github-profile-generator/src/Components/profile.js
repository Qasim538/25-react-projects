import React, { useEffect, useState } from "react";
import User from "./User";

const Profile = () => {
  const [userName, setUserName] = useState("Qasim538");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    fetchGitHubData();
  };

  const fetchGitHubData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search GitHub Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {loading && <h1>Loading data, please wait...</h1>}
      {error && <h1>Error: {error}</h1>}
      {userData && !loading && !error && <User user={userData} />}
    </div>
  );
};

export default Profile;
