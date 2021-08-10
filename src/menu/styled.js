import styled from "styled-components";

export const AsideSection = styled.div`
  height: 100vh;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  text-align: center;
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
  line-height: 150%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.tealDark};
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.tealDark};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;
