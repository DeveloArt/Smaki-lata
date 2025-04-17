import { Controller, useForm } from 'react-hook-form';
import { REGEX_EMAIL } from '../../constants/REGEX';
import { Input } from '../atoms/Input';
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
      email: 'smakilata@gmail.com',
      password: 'smakilata2025!',
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
            message: 'Pole nie może zawierać specjalnych znaków',
          },
        }}
        render={() => (
          <div>
            <label className="fieldset-label">Email</label>
            <Input
              className="input"
              placeholder="email"
              autoComplete={'on'}
              {...register('email')}
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
            <Input
              className="input"
              placeholder="hasło"
              autoComplete={'on'}
              {...register('password')}
            />
          </div>
        )}
      />
      <button className="btn btn-neutral mt-4" type="submit" disabled={!isValid}>
        Zaloguj się
      </button>
    </form>
  );
};
