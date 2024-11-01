import { ReactNode } from "react";
import { Container, MonthYearInput, Label } from "./styles";

interface Props {
  label?: string;
  id: string;
  month?: string;
  year?: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
}

export const DateInputComponent = ({
  label,
  id,
  month,
  year,
  onChange,
  children,
}: Props) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <MonthYearInput id={id} value={month || year} onChange={onChange}>
        {children}
      </MonthYearInput>

      {/* <Label htmlFor="year">Ano:</Label>
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
      </MonthYearInput> */}
    </Container>
  );
};
