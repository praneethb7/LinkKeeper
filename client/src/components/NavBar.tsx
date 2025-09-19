"use client"
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavbarButton,
} from "./ui/resizable-navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="relative top-[15px] w-[90%] mx-auto rounded-xl bg-zinc-900">
      <Navbar>
        <NavBody>
          <div className="flex items-center justify-evenly w-full">
            <NavbarLogo />
              <Link to="/" className="text-white text-lg font-bold hover:text-cyan-400 transition">
              The One Place for All your Bookmarks
            </Link>
            <Link to="/add">
              <NavbarButton variant="primary">Add New Link</NavbarButton>
            </Link>
          </div>
        </NavBody>
      </Navbar>
    </div>
  );
}

export default NavBar;
