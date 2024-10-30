import { InputContainer, Label, InputStyle } from "./styles";

interface Props {
  label?: string;
  name: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

export const Input = ({ label, name, placeholder, type, required }: Props) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <InputStyle
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </InputContainer>
  );
};
