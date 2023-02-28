import styled from 'styled-components'

export const Container = styled.ul`
  ul{
    display: flex;
    margin: 10px 0;
    width: 12px;
    height: 12px;

    gap: 10px;
  }
  li{
    list-style: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
        
`
