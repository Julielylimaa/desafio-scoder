import { useState } from "react";
import { Container, MonthYearInput, Label } from "./styles";

export const DateInputComponent = () => {
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

  const [month, setMonth] = useState(months[0]);
  const [year, setYear] = useState(currentYear);

  return (
    <Container>
      <Label htmlFor="month">Mes:</Label>
      <MonthYearInput
        id="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        {months.map((m, index) => (
          <option key={index} value={m}>
            {m}
          </option>
        ))}
      </MonthYearInput>

      <Label htmlFor="year">Ano:</Label>
      <MonthYearInput
        id="year"
        value={year}
        onChange={(e) => {
          setYear(Number(e.target.value));
        }}
      >
        {[...Array(10)].map((_, index) => (
          <option key={currentYear - index} value={currentYear - index}>
            {currentYear - index}
          </option>
        ))}
      </MonthYearInput>
    </Container>
  );
};
