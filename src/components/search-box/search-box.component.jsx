import React from "react";
import './search-box.styles.css';

export const SearchBox = ({placeholder, searchChanged}) => (
  <input className="search" type="search" placeholder={placeholder} onChange={searchChanged} />
);