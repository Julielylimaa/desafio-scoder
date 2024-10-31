import styled from "styled-components";
import theme from "../../styles/theme";
export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 5rem;
    background-color:${theme.COLORS.GREEN};
`

export const Title = styled.text`
    color: ${theme.COLORS.WHITE};
    font-size:${theme.FONT_SIZE.LG};
`