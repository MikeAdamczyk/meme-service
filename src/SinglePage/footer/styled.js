import styled from "styled-components";

export const FooterInfo = styled.footer`
    text-align: center;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 18px;
    margin-bottom: 50px;

    @media (max-width: ${({ theme }) => theme.breakpoints.big}) {
        font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 14px;
    
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 10px;
    }
`;