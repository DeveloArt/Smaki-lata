import { Controller, useForm } from "react-hook-form";
import { REGEX_EMAIL } from "../../constants/REGEX";
interface IInputs {
  email: string;
  password: string;
}
interface LoginFormProps {
  onSubmit: (data: IInputs) => void;
}

export const SignInForm = ({ onSubmit }: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<IInputs>({
    defaultValues: {
      email: "smakilata@gmail.com",
      password: "smakilata2025!",
    },
  });
  return (
    <form
      className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box"
      onSubmit={handleSubmit(onSubmit)}
    >
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
            <label className="fieldset-label">Email</label>
            <input
              className="input"
              placeholder="email"
              {...register("email")}
            />
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
            <label className="fieldset-label">Hasło</label>
            <input
              className="input"
              placeholder="hasło"
              {...register("password")}
            />
          </div>
        )}
      />
      <button
        className="btn btn-neutral mt-4"
        type="submit"
        disabled={!isValid}
      >
        Zaloguj się
      </button>
    </form>
  );
};
