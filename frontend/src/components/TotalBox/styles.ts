import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 230px;
    height: 90px;
    padding: 1rem;
    margin-bottom: 3rem;
    border: 1px solid transparent;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    

`

export const Title = styled.text`
    color: ${theme.COLORS.GRANITE_GRAY};
    font-size: 15px;
`

export const Total = styled.text`
    margin-top: 0.5rem;
    color: ${theme.COLORS.DARK_GRAY};
    font-size: 25px;
`