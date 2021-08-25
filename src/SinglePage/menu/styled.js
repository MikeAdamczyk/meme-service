import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const shine = keyframes`
  from {
    mask-position: 150%;
  }
  
  to {
    mask-position: -50%;
  }
`;

export const Header = styled.h1`
  font-size: 2.5vw;
  padding-top: 1.5vw;
  line-height: 120%;

  &:hover {
    mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    mask-size: 180%;
    animation: ${shine} 1s ease-in-out infinite;
  }
`;

export const AsideSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  box-shadow: inset 0 -7em 5em rgba(0, 0, 0, 0.1), 0 0 0 0px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const StyledNavigation = styled.ul`
  margin-top: 5vh;
  padding-left: 0px;
  list-style-type: none;
  text-decoration: none;
  transition: 0.3s ease;
`;

export const StyledItem = styled.li`
  font-size: 2vw;
  line-height: 200%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.tealDark};
  transition: 0.3s ease-in-out;

  &:hover {
    font-size: 2.2vw;
    cursor: pointer;
  }
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-decoration: none;
  color: teal;
  padding: 0.5vw 1vw;

  &.${activeClassName} {
    background: ${({ theme }) => theme.colors.grey};
  }
`;

export const MenuSection = styled.div`
  flex-grow: 9;
`;

export const ALKSection = styled.div`
  flex-grow: 1;
`;

export const ALKHeader = styled.p`
  font-size: 0.7vw;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const AlkLogo = styled.img`
  width: 40%;
  opacity: 0.4;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
