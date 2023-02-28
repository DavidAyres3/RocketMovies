import styled from "styled-components"

export const Container = styled.button`
width: 100%;
height: 56px;

display: flex;
align-items: center;
justify-content: center;

font-weight: 700;
font-size: 16px;
gap: 8px;

margin-top: 16px;
border-radius: 10px;
border: none;

background-color: ${({ theme }) => theme.COLORS.BLACK_100};
color: ${({ theme }) => theme.COLORS.PINK};


&:disabled{
    opacity: 0.5;
}
`