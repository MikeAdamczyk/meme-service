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
  font-size: 2.5rem;
  line-height: 120%;

  &:hover{
  mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
  mask-size: 180%;
  animation: ${shine} 1s ease-in-out infinite;
}
`;

export const AsideSection = styled.div`
  height: 100vh;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  text-align: center;
  box-shadow: inset 0 -7em 5em rgba(0, 0, 0, 0.1), 0 0 0 0px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const StyledNavigation = styled.ul`
  margin-top: 3rem;
  padding-left: 0px;
  list-style-type: none;
  text-decoration: none;
  transition: 0.3s ease;
`;

export const StyledItem = styled.li`
  font-size: 30px;
  line-height: 200%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.tealDark};
  transition: 0.3s ease-in-out;

  &:hover {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
  }
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-decoration: none;
  color: teal;
  padding: 5px 30px;

  &.${activeClassName} {
    background: ${({ theme }) => theme.colors.grey};
  }
`;
