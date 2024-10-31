import { Header } from "../../components/Header/Header";
import { RecordsTable } from "../../components/Table/RecordsTable";
import { Container } from "./styles";

export const AccountingRecords = () => {
  return (
    <Container>
      <Header />
      <RecordsTable />
    </Container>
  );
};
