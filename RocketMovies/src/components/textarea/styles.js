import styled from 'styled-components'

export const Container = styled.textarea`
width: 93%;
height: 340px;

padding: 16px;
margin-top: 40px;

background: ${({ theme }) => theme.COLORS.BLACK};
color: ${({ theme }) => theme.COLORS.WHITE};

resize: none;
border: none;
border-radius: 10px;
`