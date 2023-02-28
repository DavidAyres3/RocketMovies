import styled from "styled-components";
import BackgroundImg from "../../assets/background.png"

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;
`

export const Form = styled.form`
width: 670px;
padding: 0 136px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: start;


    >h1{
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > p{

        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    
    > h2{
        font-size: 24px;
        margin: 48px 0
    }


    > a{
        color: ${({theme}) => theme.COLORS.PINK};
        text-align: center;
    }

    button {
        background: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.FONT_BUTTON};
    }
` 

export const Background = styled.div`
flex: 1;
background: url(${BackgroundImg}) no-repeat center;
background-size: cover;
`