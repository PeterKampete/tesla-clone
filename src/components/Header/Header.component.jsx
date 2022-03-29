import React, { useState } from "react";
import {
  Container,
  Menu,
  RightMenu,
  CustomMenu,
  CustomClose,
  BurgerNav,
  CloseWrapper,
} from "./Header.styles";
import logo from "../../assets/images/logo.svg";
import Fade from "react-reveal";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src={logo} />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model S</a>

        <a href="#">Model S</a>

        <a href="#">Model S</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper onClick={() => setBurgerStatus(false)}>
          <CustomClose />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Use Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;
