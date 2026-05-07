import React, { useState } from "react";
import { Navigation } from "../index";
function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click} handleClick={() => handleClick()} />
    </>
  );
}
export default HamburgerMenu;
