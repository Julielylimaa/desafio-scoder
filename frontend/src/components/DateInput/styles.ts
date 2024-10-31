import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`
export const Label = styled.label`
    margin-bottom: 0.2rem;
    color: ${theme.COLORS.DARK_GRAY};
    font-size: 1rem;
`
export const MonthYearInput = styled.select`
    padding: 8px;
    border: 1px solid ${theme.COLORS.LIGHT_GRAY};
    border-radius: 4px;
    width: 100px;

  &:focus {
    outline: none;
  }
`
