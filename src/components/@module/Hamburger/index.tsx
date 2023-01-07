import { Drawer, SvgIcon } from "components/@base";
import React from "react";
import useBaseStore from "stores/useBaseStore";
import NavItems from "../NavItems";

function Hamburger() {
  const { isVisibleNav, openNav, closeNav } = useBaseStore();

  const onClickHamburger = () => {
    openNav();
  };

  return (
    <>
      <button
        type="button"
        onClick={onClickHamburger}
        className="p-4 m-[-1rem]"
      >
        <SvgIcon name="menu" size={28} />
      </button>
      <Drawer isVisible={isVisibleNav} onBackDrop={closeNav}>
        <NavItems onClick={closeNav} />
      </Drawer>
    </>
  );
}

export default Hamburger;
