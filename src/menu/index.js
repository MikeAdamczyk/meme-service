import React from "react";
import {
  StyledNavigation,
  StyledItem,
  AsideSection,
} from "./styled";
import { Header } from "../common/styled.js";
// import { StyledNavLink } from "../../../CommonStyles/styled";

export const MenuBox = () => (
  <AsideSection>
    <Header>MEMES SERVICE</Header>
    <nav>
      <StyledNavigation>
        <StyledItem>
          {/* <StyledNavLink to="/movies">MOVIES</StyledNavLink> */}
          HOT
        </StyledItem>
        <StyledItem>
          {/* <StyledNavLink to="/people">PEOPLE</StyledNavLink> */}
          REGULAR
        </StyledItem>
      </StyledNavigation>
    </nav>
  </AsideSection>
);
