import React from "react";
import { StyledNavigation, StyledItem, AsideSection } from "./styled";
import { Header, StyledNavLink } from "./styled.js";

export const MenuBox = () => (
  <AsideSection>
    <Header>MEMES SERVICE</Header>
    <nav>
      <StyledNavigation>
        <StyledItem>
          <StyledNavLink to="/hot">HOT</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to="/regular">REGULAR</StyledNavLink>
        </StyledItem>
        <StyledItem>
          <StyledNavLink to="/favourites">FAVOURITES</StyledNavLink>
        </StyledItem>
      </StyledNavigation>
    </nav>
  </AsideSection>
);
