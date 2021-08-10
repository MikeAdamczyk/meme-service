import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.grey};
    margin: 0 auto;
    display: flex;
`;

export const MemeTitle = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    font-size: 32px;
    line-height: 120%;
    padding: 20px;
    margin: 0;
    text-align: center;

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

export const TileElement = styled.div`
    width: 50%;
    margin: 30px auto;
    padding: 20px 60px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 10px;
    display: grid;
`;

export const Image = styled.img`
    width: 100%;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    margin-bottom: 20px;
    border-radius: 10px;
    transition: filter 0.5s, transform 0.5s;
    
    &:hover{
    transform: scale(1.02);
    }
`;

export const VoteButton = styled.button`
  width: 40%;
  border: 2px solid #e3e3e3;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 0px #ccc;
  padding: 10px 20px;
  margin: 10px 10px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ color }) => color || "black"};
  font-weight: bold;
  transition: 0.4s ease-in-out;

  &:hover {
    background: ${({ color }) => (color === "red" ? "red" : "green")};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;

export const VoteBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-size: 3rem;
 `;
