import React, { useState } from "react";
import Row from "./components/Row/Row";
import Nav from "./components/Nav/Nav";
import { debounce } from "lodash";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const searchQuery = debounce((searchTerm) => {
    setSearch(searchTerm);
  }, 250);

  return (
    <div className="app">
      <Nav search={searchQuery} />
      <Row search={search} />
    </div>
  );
}

export default App;
