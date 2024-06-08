import { ButtonStyled } from "./Button.styled";

const Button = (props:any) => {
  const { text, onClick } = props;
  
  return(
    <ButtonStyled onClick={onClick}>
      {text}
    </ButtonStyled>
  )
};

export default Button;