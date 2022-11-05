import React from "react";
import UserResults from "../components/users/UserResults";

function Home() {
  return (
    <>
      {/* SEARCH COMPONENT */}
      <UserResults />
      {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
    </>
  );
}

export default Home;
