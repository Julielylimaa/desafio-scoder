import { BtnLogin, Container, RegisterForms, Text, Title } from "./styles";
import { Input } from "../../components/Form/Input/Input";
import { Button } from "../../components/Form/Button/Button";
import { ImageBox } from "../../components/ImageBox/ImageBox";
import { useNavigate } from "react-router";

const handleSubmit = () => {
  console.log("Submited");
};
export const Register = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ImageBox>
        <RegisterForms>
          <Title>Crie sua conta</Title>
          <Input
            label="Nome completo"
            placeholder="Digite seu nome"
            name="name"
            type="text"
            required
          ></Input>
          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            name="email"
            type="email"
            required
          ></Input>
          <Input
            label="Senha"
            placeholder="Crie sua senha"
            name="senha"
            type="password"
            required
          ></Input>
          <Button text="Cadastrar" onClick={handleSubmit} />

          <Text>
            Já possui uma conta?{" "}
            <BtnLogin onClick={() => navigate(-1)}> Faça Login</BtnLogin>
          </Text>
        </RegisterForms>
      </ImageBox>
    </Container>
  );
};
