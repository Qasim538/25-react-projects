import React from "react";

const User = ({ user }) => {
  const { avatar_url, followers, following, name, login } = user;

  return (
    <div className="user">
      <div>
        <img
          src={avatar_url}
          className="avatar"
          alt={`${name || login}'s avatar`}
        />
      </div>
      <div>
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name || login}
        </a>
      </div>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
    </div>
  );
};

export default User;
