import { FC, useState } from "react";
import "./input.css"
import CANCEL from "../../assets/images/cancel.png"
import OK from "../../assets/images/check.png"
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { TData } from "../../types/mocks";

type Props = {
  register: UseFormRegister<TData>;
  errors: FieldErrors<TData>;
  name: string;
  label: string,
}

const Input: FC<Props> = ({ register, errors, name, label }) => {

  const [value, setValue] = useState("");

  const errorError = errors[ name as keyof TData]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className="input__block">
      <input
        type="text"
        className={errorError ? "input input__error" : (value ? "input__value" : "input")}
        {...register(name as keyof TData,
          {
            required: true,
            maxLength: 10
          })}
        value={value}
        onChange={handleChange} />
      <label
        className={value ? "label__filled" : "label"}
      >{label}</label>
      {
        value && <img className="input__icon" src={errorError ? CANCEL : OK} alt="Иконка" />
      }

      {errorError && <p className={errorError ? "desc__error" : "desc__ok"}> Некорректные данные</p>}
    </div>
  );
}

export default Input;