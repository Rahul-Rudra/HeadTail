import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1 className="text-dark text-center">Home Page</h1>
      <div className="m-2">
        <Link to="/about">Go to about</Link>
      </div>
      <div className="m-2">
        <Link to="/head-tail">Go to Head&Tail</Link>
      </div>
    </>
  );
}

export default Home;
