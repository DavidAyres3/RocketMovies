import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 30px;
    
    display: grid;
    grid-template-rows: 116px auto;         //dizemos que a linha da primeira coluna terá 116px, que será a do header, 
                                            //e a próxima será automática que será o conteúdo.

    grid-template-areas: 
    'header'                                //aqui será a sequencia dos componentes, o header ficará em cima, e o content  
    'content';                              //ficará abaixo.
`

export const Content = styled.div`
    margin-left: 123px;

    > .inputText{
        width: 93%;
        display: flex;
        justify-content: space-between;
        gap: 88px;
        margin-top: 40px;
        margin-right: 500;
    }
    
    > span {
        display: flex;
        font-size: 20px;
        margin: 40px 0 24px;
    }

    > .tags{
        width: 93%;
        padding: 16px;
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.BLACK_100};

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.BLACK_100};
        }
    }

    > .buttons {
        width: 93%;
        margin-bottom: 5%;
        display: flex;
        gap: 40px;
    }
    `