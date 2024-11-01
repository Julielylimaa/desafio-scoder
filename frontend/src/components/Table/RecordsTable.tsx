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
import { Pagination } from "../Pagination/Pagination";

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
  const [totalEntries, setTotalEntries] = useState<number>();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    const date = `${monthIndex + 1}- ${year}`;

    console.log(date);
    const fetchData = async () => {
      try {
        const accountingRecords = await getAccountingRecords(
          date,
          currentPage,
          pageSize
        );
        if (accountingRecords) {
          const { entries, totalCredit, totalDebit, totalEntries } =
            accountingRecords;
          setTotalEntries(totalEntries);
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
  }, [month, monthIndex, year, currentPage]);

  return (
    <Container>
      <SelectDateContainer>
        <DateInputComponent
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
      <Pagination
        totalItems={totalEntries || 0}
        itemsPerPage={pageSize}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};
