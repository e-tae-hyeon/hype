import { Logotypo } from "components/@base";
import useCheckDesktop from "hooks/useCheckDesktop";
import React from "react";
import Hamburger from "../Hamburger";
import NavItems from "../NavItems";

function Header() {
  const isDesktop = useCheckDesktop();

  return (
    <header className="flex items-center justify-between p-4">
      <Logotypo />
      {isDesktop ? <NavItems direction="horizontal" /> : <Hamburger />}
    </header>
  );
}

export default Header;
