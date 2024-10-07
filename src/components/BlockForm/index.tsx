import Input from "../../ui/Input";
import Button from "../../ui/Button";
import "./form.css"
import { useForm } from "react-hook-form"

export type TData = {
  name: string,
  tel: string,
  agreement: boolean,
}

const BlockForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      agreement: false,
    },
    mode: "onChange",
  });

  const onSubmit = (data: TData) => {
    console.log(data);
    alert("Данные отправлены!")
  }

  return (
    <section className="block__form">
      <div className="container">
        <h2 className="title">Отправь форму</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Input errors={errors}
            register={register}
            name="name"
            label="Имя" />
          <Input errors={errors}
            register={register}
            name="tel"
            label="Телефон" />
          <div className="checkbox">
            <input className="checkbox__input" type="checkbox"  {...register("agreement", { required: true })} />
            <label>Cогласен, отказываюсь</label>
            {errors.agreement && <p className="desc__error-checkbox">Примите условия</p>}
          </div>
          <Button type="s">Отправить</Button>
        </form>
      </div>
    </section>
  );
}

export default BlockForm;