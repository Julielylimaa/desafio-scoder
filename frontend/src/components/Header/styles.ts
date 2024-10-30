import styled from "styled-components";
import theme from "../../styles/theme";
export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 5rem;
    background-color:${theme.COLORS.GREEN};
`

export const Title = styled.text`
    font-family:'Roboto', sans-serif;
    font-size:${theme.FONT_SIZE.XL};
`