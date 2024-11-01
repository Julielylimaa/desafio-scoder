import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

`
export const Label = styled.label`
    margin-bottom: 0.2rem;
    color: ${theme.COLORS.DARK_GRAY};
    font-size: 1rem;
`
export const MonthYearInput = styled.select`
    padding: 8px;
    border: 1px solid ${theme.COLORS.GREEN};
    border-radius: 4px;
    width: 100px;
    color: ${theme.COLORS.GREEN};

  &:focus {
    outline: none;
  }
`
