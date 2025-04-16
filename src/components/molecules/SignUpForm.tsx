import { Controller, useForm } from 'react-hook-form';
import { REGEX_EMAIL } from '../../constants/REGEX';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
interface IInputs {
  email: string;
  firstName: string;
  lastName: string;
  telNumber: string;
}
interface LoginFormProps {
  onSubmit: (data: IInputs) => void;
}

export const SignUpForm = ({ onSubmit }: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<IInputs>({
    defaultValues: {
      email: 'smakilata@gmail.com',
      firstName: 'Tonek',
      lastName: 'Kowalski',
      telNumber: '123456789',
    },
  });
  return (
    <form
      className={`fieldset bg-base-200 border border-base-300 p-4 rounded-box w-full`}
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
            <Input className="w-full" placeholder="email" {...register('email')} />
          </div>
        )}
      />
      <Controller
        name="firstName"
        control={control}
        rules={{
          required: true,
        }}
        render={() => (
          <div>
            <label className="fieldset-label">Imię</label>
            <Input className="w-full" placeholder="imię" {...register('firstName')} />
          </div>
        )}
      />
      <Controller
        name="lastName"
        control={control}
        rules={{ required: true }}
        render={() => (
          <div>
            <label className="fieldset-label">Nazwisko</label>
            <Input className="w-full" placeholder="nazwisko" {...register('lastName')} />
          </div>
        )}
      />
      <Controller
        name="telNumber"
        control={control}
        rules={{ required: true }}
        render={() => (
          <div>
            <label className="fieldset-label">Telefon</label>
            <Input className="w-full" placeholder="telefon" {...register('telNumber')} />
          </div>
        )}
      />
      <Button variant="add" type="submit" className="mt-4" disabled={!isValid}>
        Zarejestruj nowego pracownika
      </Button>
    </form>
  );
};
