import { Controller, useForm } from "react-hook-form";
import { REGEX_EMAIL } from "../../constants/REGEX";
interface IInputs {
  email: string;
  password: string;
}
interface LoginFormProps {
  onSubmit: any;
}

export const SignInForm = ({ onSubmit }: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<IInputs>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: true,
          pattern: {
            value: REGEX_EMAIL,
            message: "Pole nie może zawierać specjalnych znaków",
          },
        }}
        render={() => (
          <div>
            <label>Email</label>
            <input placeholder="email" {...register("email")} />
          </div>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
        }}
        render={() => (
          <div>
            <label>Hasło</label>
            <input placeholder="hasło" {...register("password")} />
          </div>
        )}
      />
      <button type="submit" disabled={!isValid}>
        Zaloguj się
      </button>
    </form>
  );
};
