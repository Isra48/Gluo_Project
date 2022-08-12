import React, { useState } from "react";
import "./Navbar.css";
import Icon from "../IMG/search_icon.png";

const Navbar = ({ onClick, onChange, search }) => {
  return (
    <div className="Navbarmarvel">
      <div className="textnav"> Marvel´s character list</div>
      <div className="search-container">
        <img src={Icon} alt="search_icon" className="Icon"></img>
        <input
          name="search"
          value={search}
          onChange={onChange}
          className="buscar"
          type="text"
          placeholder="Buscar como.."
        />
        <button
          onClick={() => onClick(search)}
          type="submit"
          className="submitmarvel"
        >
          Buscar{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
