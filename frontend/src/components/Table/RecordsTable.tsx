import { useEffect, useState } from "react";
import { DateSelect } from "../DateSelect/DateSelect";
import {
  Container,
  DateBtnContainer,
  Message,
  MessageContainer,
  SelectDateContainer,
  Table,
  TBody,
  Td,
  Th,
  THead,
  TotalBoxContainer,
  Tr,
  ValueHighLight,
} from "./styles";
import { getAccountingRecords } from "../../service/AccountingEntry/accountingService";
import { Pagination } from "../Pagination/Pagination";
import { TotalBox } from "../TotalBox/TotalBox";

import { Modal } from "../AddRecordModal/Modal";

type Entries = {
  id: string;
  date: string;
  description: string;
  type: "Credit" | "Debit";
  value: number;
  createdAt: string;
  userId: string;
};
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
export const RecordsTable = () => {
  const currentYear = new Date().getFullYear();

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
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, [month, monthIndex, year, currentPage]);

  return (
    <Container>
      <TotalBoxContainer>
        <TotalBox title="Crédito" total={totalCredit || 0}></TotalBox>
        <TotalBox title="Débito" total={totalDebit || 0}></TotalBox>
      </TotalBoxContainer>

      <DateBtnContainer>
        <SelectDateContainer>
          <DateSelect
            id="month"
            value={month}
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
          </DateSelect>
          <DateSelect
            id="year"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {[...Array(10)].map((_, index) => (
              <option key={currentYear - index} value={currentYear - index}>
                {currentYear - index}
              </option>
            ))}
          </DateSelect>
        </SelectDateContainer>
        <Modal></Modal>
      </DateBtnContainer>

      {entries.length === 0 ? (
        <MessageContainer>
          <Message>Não há dados disponiveis para essa data!</Message>
        </MessageContainer>
      ) : (
        <>
          <Table>
            <THead>
              <Tr>
                <Th>Data</Th>
                <Th>Descrição</Th>
                <Th>Valor</Th>
                <Th>Tipo</Th>
              </Tr>
            </THead>
            <TBody>
              {entries.map((entry) => (
                <Tr key={entry.id}>
                  <Td>{new Date(entry.date).toLocaleDateString("pt-BR")}</Td>
                  <Td>{entry.description}</Td>
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
        </>
      )}
    </Container>
  );
};
