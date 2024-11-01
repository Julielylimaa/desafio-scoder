import { Container, Title, Total } from "./styles";

interface Props {
  title: string;
  total: number;
}

export const TotalBox = ({ title, total }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Total>R$ {total.toFixed(2)}</Total>
    </Container>
  );
};
