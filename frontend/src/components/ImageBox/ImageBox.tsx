import { ReactNode } from "react";
import loginImage from "../../images/login.jpeg";
import { Container, Forms, ImageContainer } from "./styles";

interface BoxProps {
  children?: ReactNode; // Certifique-se de usar ReactNode
}
export const ImageBox = ({ children }: BoxProps) => {
  return (
    <Container>
      <ImageContainer src={loginImage} alt="Contabilidade Eficiente" />
      <Forms>{children}</Forms>
    </Container>
  );
};
