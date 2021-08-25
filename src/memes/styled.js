import styled, { css, keyframes } from "styled-components";
import StarsIcon from "@material-ui/icons/Stars";

export const FavStar = styled(StarsIcon)`
  && {
    font-size: 2.5vw;
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
  font-size: 2vw;
  line-height: 120%;
  padding: 1.2vw;
  margin: 0 0 0 10%;
  text-align: center;
  flex: 1 1 90%;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TileElement = styled.div`
  width: 50%;
  margin: 3vw auto;
  padding: 1vw 3vw 2vw;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 10px;
  display: grid;
`;

export const Image = styled.img`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-bottom: 1vw;
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
  padding: 0.5vw;
  margin: 0.5vw;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ color }) => color || "black"};
  font-weight: bold;
  font-size: 1.2vw;
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
  margin: 0;
`;

const rotate = keyframes`
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
`;

export const NotFoundImage = styled.img`
  margin: auto;
  width: 30%;

  &:hover {
    animation: ${rotate} 1s ease-in-out infinite;
  }
`;

export const NotFoundInfo = styled.p`
  margin: 3vw auto;
  padding-top: 3vw;
  font-size: 3vw;
`;
