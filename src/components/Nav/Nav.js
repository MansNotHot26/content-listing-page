import React, { useState } from "react";
import "./Nav.css";
import back from "../../images/Back.png";
import searchIcon from "../../images/search.png";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "black",
    backgroundColor: "white",
    marginRight: "10px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "5px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
      fontSize: "40px",
    },
  },
}));
function Nav({ search }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const openSearch = () => {
    setOpen(!open);
  };

  const searchTerm = (e) => {
    search(e.target.value);
  };
  return (
    <div className="nav">
      <div className="nav-start">
        <img className="nav-back-button" alt="back-button" src={back} />
        <h1 className="title">Romantic Comedy</h1>
      </div>
      {open && (
        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          placeholder="Search Movies…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => searchTerm(e)}
        />
      )}
      <img
        className="nav-search-icon"
        alt="search-icon"
        src={searchIcon}
        onClick={openSearch}
      />
    </div>
  );
}

export default React.memo(Nav);
