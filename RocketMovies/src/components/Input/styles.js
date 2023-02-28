import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    margin-bottom: 8px;
    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BLACK};
    color: ${({theme}) => theme.COLORS.GRAY_300 };


    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: ${({theme}) => theme.COLORS.BLACK};
        border-radius: 10px;
        border: 0;
        outline: none;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

    }
    > svg {
        margin-left: 16px;
        margin-right: 10px;
    }
`   

