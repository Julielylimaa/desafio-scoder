import { useEffect, useState } from "react";
import { DateInputComponent } from "../DateInput/DateInput";
import {
  Container,
  SelectDateContainer,
  Table,
  TBody,
  Td,
  Tr,
  ValueHighLight,
} from "./styles";
import { getAccountingRecords } from "../../service/AccountingEntry/accountingService";

type Entries = {
  id: string;
  date: string;
  description: string;
  type: "Credit" | "Debit";
  value: number;
  createdAt: string;
  userId: string;
};

export const RecordsTable = () => {
  const currentYear = new Date().getFullYear();
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [monthIndex, setMonthIndex] = useState(0);
  const [month, setMonth] = useState(months[0]);
  const [year, setYear] = useState(currentYear);

  const [entries, setEntries] = useState<Entries[]>([]);
  const [totalCredit, setTotalCredit] = useState<number>();
  const [totalDebit, setTotalDebit] = useState<number>();

  useEffect(() => {
    const date = `${monthIndex + 1}- ${year}`;
    const page = 1;
    const pageSize = 10;
    console.log(date);
    const fetchData = async () => {
      try {
        const accountingRecords = await getAccountingRecords(
          date,
          page,
          pageSize
        );
        if (accountingRecords) {
          const { entries, totalCredit, totalDebit } = accountingRecords;
          setEntries(entries);
          setTotalCredit(totalCredit);
          setTotalDebit(totalDebit);
          console.log(entries, totalCredit, totalDebit);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, [month, monthIndex, year]);

  return (
    <Container>
      <SelectDateContainer>
        <DateInputComponent
          label="mês"
          id="month"
          month={month}
          onChange={(e) => {
            setMonth(e.target.value);
            setMonthIndex(e.target.selectedIndex);
          }}
        >
          {months.map((m, index) => (
            <option key={index} value={m}>
              {m}
            </option>
          ))}
        </DateInputComponent>
        <DateInputComponent
          label="ano"
          id="year"
          year={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {[...Array(10)].map((_, index) => (
            <option key={currentYear - index} value={currentYear - index}>
              {currentYear - index}
            </option>
          ))}
        </DateInputComponent>
      </SelectDateContainer>

      <Table>
        <TBody>
          {entries.map((entry) => (
            <Tr key={entry.id}>
              <Td>{new Date(entry.date).toLocaleDateString("pt-BR")}</Td>
              <Td>Pagamento</Td>
              <Td>
                <ValueHighLight variant={entry.type}>
                  R$ {entry.value.toFixed(2)}
                </ValueHighLight>
              </Td>
              <Td>{entry.type}</Td>
            </Tr>
          ))}
        </TBody>
      </Table>
    </Container>
  );
};
