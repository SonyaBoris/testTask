import { FC } from "react";
import "./button.css"

type Props = {
  children: string,
  type: string,
}

const Button: FC<Props> = ({ children, type }) => {
  return (
    <button
      className={type === "s" ? "button__submit" : "button__reset"}
      type={type === "s" ? "submit" : "reset"}>
      {children}
    </button>
  );
}

export default Button;