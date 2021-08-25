import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  margin: 0 auto;
  display: flex;
`;

export const Main = styled.main`
  overflow-y: scroll;
  height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  margin-top: 3vw;
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 3vw;
  text-align: center;
`;
