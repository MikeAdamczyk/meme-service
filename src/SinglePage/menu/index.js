import React from "react";
import { StyledNavigation, StyledItem, AsideSection } from "./styled";
import {
  Header,
  StyledNavLink,
  AlkLogo,
  MenuSection,
  ALKSection,
  ALKHeader,
} from "./styled.js";
import alkLogo from "../../database/images/alk-logo.png";

export const MenuBox = () => (
  <AsideSection>
    <MenuSection>
      <Header>MEME SERVICE</Header>
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
    </MenuSection>
    <ALKSection>
      <ALKHeader>In association with</ALKHeader>
      <a
        href="https://www.kozminski.edu.pl/pl/oferta-edukacyjna/studia-podyplomowe/frontend-development-z-react"
        title="ALK - FRONTEND DEVELOPMENT Z REACT"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AlkLogo src={alkLogo} alt="alk-logo" />
      </a>
    </ALKSection>
  </AsideSection>
);
