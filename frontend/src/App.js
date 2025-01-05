
import PullRequestList from "./components/PullRequestList";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePR from './components/CreatePR';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <PullRequestList/>
        <Route path="/create-pr" element={<CreatePR />} />
      </Routes>
    </Router>
  );
};

export default App;
