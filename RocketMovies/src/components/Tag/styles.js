import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    height: 30px;
    
    margin-top: 40px;
    border-radius: 10px;
    padding: 7.5px 16px;
    
    font-family: 'Roboto';
    font-size: 12px;
    background-color:${({ theme }) => theme.COLORS.FONT_BUTTON};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
`