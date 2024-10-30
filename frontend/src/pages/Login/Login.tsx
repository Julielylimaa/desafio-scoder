import { BtnRegister, Container, LoginForms, Text, Title } from "./styles";
import { Input } from "../../components/Form/Input/Input";
import { Button } from "../../components/Form/Button/Button";
import { ImageBox } from "../../components/ImageBox/ImageBox";
import { useNavigate } from "react-router";

const handleSubmit = () => {
  console.log("Submited");
};
export const Login = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ImageBox>
        <LoginForms>
          <Title>Acesse sua conta</Title>
          <Input
            label="E-mail"
            placeholder="Entre com seu e-mail"
            name="email"
            type="email"
            required
          ></Input>
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            name="senha"
            type="password"
            required
          ></Input>
          <Button text="Entrar" onClick={handleSubmit} />
          <Text>
            Ainda nao tem uma conta?{" "}
            <BtnRegister onClick={() => navigate("/register")}>
              Registre-se
            </BtnRegister>
          </Text>
        </LoginForms>
      </ImageBox>
    </Container>
  );
};
