import { Movie, Search, Tv, Whatshot } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);
  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="nav"
    >
      <BottomNavigationAction label="Trending" icon={<Whatshot />} />
      <BottomNavigationAction label="Movies" icon={<Movie />} />
      <BottomNavigationAction label="TV series" icon={<Tv />} />
      <BottomNavigationAction label="Search" icon={<Search />} />
    </BottomNavigation>
  );
};

export default Navigation;
