import React, { useState, useEffect } from "react";
import axios from "../services/api";

function PullRequestList() {
  const [pullRequests, setPullRequests] = useState([]);

  useEffect(() => {
    axios.get("/pull-requests").then((response) => {
      setPullRequests(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Pull Requests</h2>
      <ul>
        {pullRequests.map((pr) => (
          <li key={pr._id}>{pr.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PullRequestList;