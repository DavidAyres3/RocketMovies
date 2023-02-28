import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-areas:
    'header'
    'content'
    'description';
    grid-template-rows: 116px, auto;
    width: 100%;
    font-weight: 400;
`

export const Main = styled.main`
    grid-area: 'content';
    width: 100%;
    font-weight: 400;
    margin-left: 123px;
    font-size: 16px;

    
        > .title{
            display: flex;
            align-items: center;
            gap: 20px;
            font-size: 34px;
        }
        > .content {
            width: 600px;
            margin-top: 30px;
        }

        > .author {
            margin-top: 24px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
        
            .time { 
                color: ${({ theme }) => theme.COLORS.PINK};
            }
        
            img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }
        }

        > .tags{
            display: flex;
            flex-direction: row;
            gap: 8px;
        }

        > p {
        justify-content: center;
        margin-top: 40px;
        width: 87%;
        white-space: normal;
    }
`