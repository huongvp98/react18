import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
