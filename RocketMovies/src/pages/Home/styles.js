import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    > .add {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 50px 123px;
    
        button{
            width: 13%;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            background: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`

export const Content = styled.div`
    width: 87,5%;
    height: 270px;

    display: flex;
    flex-direction: column;

    margin: 40px 123px;
    border-radius: 10px;

    padding: 32px;
    
    background-color: ${({ theme }) => theme.COLORS.PINK_500};

        .movie {
            display: flex;
            flex-direction: row;
        }

        > h1{
            font-size: 24px;
            font-weight: 700;
        }

        > p{
            margin-top: 15px;
            white-space: normal;
        }

        > .tags{
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
`

export const NewMovie = styled(Link)`
    border-radius: 10px;
    height: 48px;
    width: 210px;
    gap: 10px;

    font-size: 18px;


    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.FONT_BUTTON};

`