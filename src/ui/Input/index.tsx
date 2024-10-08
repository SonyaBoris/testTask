import { FC, useState } from "react";
import "./input.css"
import CANCEL from "../../assets/images/cancel.png"
import OK from "../../assets/images/check.png"
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { TData } from "../../pages/BlockForm";

type Props = {
  register: UseFormRegister<TData>;
  errors: FieldErrors<TData>;
  name: keyof TData;
  label: string,
}

const Input: FC<Props> = ({ register, errors, name, label }) => {

  const [value, setValue] = useState("");

  const errorError = errors[name]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className="input__block">
      <input
        type="text"
        className={errorError ? "input input__error" : (value ? "input__value" : "input")}
        {...register(name,
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