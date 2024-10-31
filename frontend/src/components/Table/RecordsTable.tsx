import { DateInputComponent } from "../DateInput/DateInput";
import { Container, Table, TBody, Td, Tr, ValueHighLight } from "./styles";

export const RecordsTable = () => {
  return (
    <Container>
      <DateInputComponent />
      <Table>
        <TBody>
          <Tr>
            <Td>12/10/2024</Td>
            <Td>Pagamento</Td>
            <Td>
              <ValueHighLight variant="Debit">R$ 12000,00</ValueHighLight>
            </Td>
            <Td>Débito</Td>
          </Tr>
          <Tr>
            <Td>12/10/2024</Td>
            <Td>Pagamento</Td>

            <Td>
              <ValueHighLight variant="Credit">R$ 12000,00</ValueHighLight>
            </Td>
            <Td>Crédito</Td>
          </Tr>
        </TBody>
      </Table>
    </Container>
  );
};
