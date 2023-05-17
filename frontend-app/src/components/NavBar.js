import React from "react";

export default function NavBar({ activeLink, onLinkClick }) {
  return (
    <>
      <div className="topnav">
        <a
          href="#locations"
          onClick={() => onLinkClick("#locations")}
          className={activeLink === "#locations" ? "active" : ""}
        >
          Location
        </a>
        <a
          href="#pokemons"
          onClick={() => onLinkClick("#pokemons")}
          className={activeLink === "#pokemons" ? "active" : ""}
        >
          Pokemons
        </a>
        <a
          href="#pokedex"
          onClick={() => onLinkClick("#pokedex")}
          className={activeLink === "#pokedex" ? "active" : ""}
        >
          Pokédex
        </a>
        <a
          href="#home"
          onClick={() => onLinkClick("#home")}
          className={activeLink === "#home" ? "active" : ""}
        >
          Home
        </a>
      </div>
    </>
  );
}