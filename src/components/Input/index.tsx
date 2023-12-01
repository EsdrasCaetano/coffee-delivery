import { InputHTMLAttributes, forwardRef } from "react"
import { InputStyleContainer, InputWrapper } from "./styles"
import { RegularText } from "../Typography";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
       error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({error, ...props}, ref) => {
   return (
       <InputWrapper>
          <InputStyleContainer {...props} ref={ref} />
           {error && <RegularText size="s">{error}</RegularText>}
       </InputWrapper>
   )
})

