import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between py-5 items-center px-5">
        <div className="flex gap-2 cursor-pointer">
          <h4>Men</h4>
          <h4>Women</h4>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Vastra</h1>
        </div>
        <div className="flex gap-3 cursor-pointer">
          <SearchIcon sx={{ fontSize: "2rem", color: "#333" }} />
          <FavoriteIcon sx={{ fontSize: "2rem", color: "#333" }} />
          <div className="relative cursor-pointer">
            <ShoppingCartIcon sx={{ fontSize: "2rem", color: "#333" }} />
            <div className="h-5 w-5 rounded-full bg-orange-500 absolute -top-2 right-0 border border-white left-4">
              <p className=" text-white font-bold s text-sm text-center">0</p>
            </div>
          </div>
          <PersonIcon sx={{ fontSize: "2rem", color: "#333"}}/>
        </div>
      </div>
    </>
  );
};

export default Header;
