import { InputContainer, Label, InputStyle } from "./styles";

interface Props {
  label?: string;
  name: string;
  type: string;
  required: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  name,
  placeholder,
  type,
  required,
  value,
  onChange,
}: Props) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <InputStyle
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};
