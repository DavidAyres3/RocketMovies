import styled from "styled-components"

export const Container = styled.header`
grid-area: header;
display: flex;
width: 100%;
height: 116px;
background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
padding: 42px 123px;
gap: 88px;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};


> a {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.PINK};
}
`
export const Profile = styled.div`
display: flex;
align-items: center;

> img {
  margin-left: 10px;
  width: 56px;
  height: 56px;
  border-radius: 50%;

}

> div{
  display: flex;
  flex-direction: column;
  align-items: end;

  a{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bold;
  }

  strong{
      font-size: 18px;
  }
}
`

export const Return = styled.button`
    border: none;
    background: none;

    > svg{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size:14px;
    }
`