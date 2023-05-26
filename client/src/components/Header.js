import { Link } from "react-router-dom";

function Header({ user }) {
  // function handleLogout() {
  //   fetch("/logout", {
  //     method: "DELETE",
  //   }).then(() => onLogout());
  // }

  return (
    <header>
      <h1>
        <Link to="/">Car Finder App</Link>
      </h1>
      {user ? (
        <p>Welcome, {user.username}</p>
      ) : (
        <p>Please Log in</p>
      )}
    </header>
  );
}

export default Header;