import styled, { css } from "styled-components";
import StarsIcon from "@material-ui/icons/Stars";

export const FavStar = styled(StarsIcon)`
  && {
    font-size: 34px;
    color: ${({ theme }) => theme.colors.darkGrey};
    flex: 1 1 10%;
    transition: 0.4s ease-in-out;

    ${({ favourite }) =>
      favourite &&
      css`
        color: ${({ theme }) => theme.colors.orange};
      `}
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const MemeTitle = styled.h1`
  color: ${({ theme }) => theme.colors.tealDark};
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  padding: 20px;
  margin: 0 0 0 10%;
  text-align: center;
  flex: 1 1 90%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
    padding: 36px 0 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
    line-height: 22px;
    padding: 24px 0 12px;
    margin: 0;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TileElement = styled.div`
  width: 50%;
  margin: 30px auto;
  padding: 20px 60px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 10px;
  display: grid;
`;

export const Image = styled.img`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-bottom: 20px;
  border-radius: 10px;
  transition: filter 0.5s, transform 0.5s;

  &:hover {
    transform: scale(1.01);
  }
`;

export const VoteButton = styled.button`
  width: 40%;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  padding: 10px 20px;
  margin: 10px 10px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ color }) => color || "black"};
  font-weight: bold;
  transition: 0.4s ease-in-out;

  &:hover {
    background: ${({ color }) => color};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;

export const VoteBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`;
