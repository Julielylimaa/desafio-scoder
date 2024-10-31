import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    width: 70%;
    margin: 4rem auto 0;
    padding-top: 5rem;
`
export const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

`

export const TBody = styled.tbody`
    color: black;
`

export const Tr = styled.tr`
color: black;`

export const Td = styled.td`
    padding: 1.25rem 2rem;
    background-color: ${theme.COLORS.VERY_LIGHT_GRAY};

    &:first-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }
    &:last-child{
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`


export const THead = styled.thead`
color: black;`


interface ValueHighLightProps {
    variant: "Credit" | "Debit"
}

export const ValueHighLight = styled.span<ValueHighLightProps>`
    color: ${props => props.variant === 'Credit' ? props.theme.COLORS.LIGHT_GREEN : props.theme.COLORS.RED}
`