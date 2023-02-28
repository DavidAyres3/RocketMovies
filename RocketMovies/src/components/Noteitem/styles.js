import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;

background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BLACK}; 
//passando o isnew para caso o componente for novo, será aplicado a a propriedade,
// se não for, será a outra propriedade
color: ${({ theme }) => theme.COLORS.WHITE};

border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};
//se o componente for novo, será aplicada uma borda com 1px e o estilo dashed, com a cor da variável.
//se não for novo, apenas NÃO terá bordas.

margin-bottom: 8px;
border-radius: 10px;
padding-right: 16px;

    > button { 
        border: none;
        background: none;
        font-size: 20px
    }

    .button-remove, .button-add{
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        width: 100%;
        height: 56px;
        text-align: start;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;


        &::placeholder{
        }
    }
`