import { useForm } from 'react-hook-form';
import { REGEX_EMAIL } from '../../constants/REGEX';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { EmployeeType } from '@/helpers/schemas';
import { useEffect, useRef } from 'react';
import { createNewEmployee } from '@/api/employeesOperapions';
import { editEmployeeById } from '@/api/employeesOperapions';
import uuid from 'react-uuid';
import { useQueryClient } from '@tanstack/react-query';

interface LoginFormProps {
  defaultValues?: EmployeeType | null;
  modalRef: React.RefObject<HTMLDialogElement>;
}

const EMPTY_FORM_VALUES = {
  email: '',
  firstName: '',
  lastName: '',
  telNumber: '',
};

export const SignUpForm = ({ modalRef, defaultValues }: LoginFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { isValid },
    reset,
  } = useForm<EmployeeType>({
    defaultValues: defaultValues || EMPTY_FORM_VALUES,
  });
  const queryClient = useQueryClient();
  console.log('defaultValues :', defaultValues);

  const onSubmit = async (data: EmployeeType) => {
    const isEdit = !!defaultValues;
    const employeeToSave = isEdit ? { ...defaultValues, ...data } : { ...data, id: uuid() };
    if (isEdit) {
      await editEmployeeById(employeeToSave, employeeToSave.id);
    } else {
      await createNewEmployee(employeeToSave);
    }

    await queryClient.invalidateQueries({ queryKey: ['employee'] });
    reset();
    modalRef.current?.close();
  };
  useEffect(() => {
    reset(defaultValues ?? {});
  }, [defaultValues, reset]);

  return (
    <form
      className="fieldset bg-base-200 border border-base-300 p-4 rounded-box w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="fieldset-label">Email</label>
        <Input
          className="w-full"
          placeholder="email"
          {...register('email', {
            required: true,
            pattern: {
              value: REGEX_EMAIL,
              message: 'Pole nie może zawierać specjalnych znaków',
            },
          })}
        />
      </div>

      <div>
        <label className="fieldset-label">Imię</label>
        <Input
          className="w-full"
          placeholder="imię"
          {...register('firstName', { required: true })}
        />
      </div>

      <div>
        <label className="fieldset-label">Nazwisko</label>
        <Input
          className="w-full"
          placeholder="nazwisko"
          {...register('lastName', { required: true })}
        />
      </div>

      <div>
        <label className="fieldset-label">Telefon</label>
        <Input
          className="w-full"
          placeholder="telefon"
          {...register('telNumber', { required: true })}
        />
      </div>

      <Button variant="add" type="submit" className="mt-4" disabled={!isValid}>
        {defaultValues ? 'Edytuj pracownika' : 'Zarejestruj nowego pracownika'}
      </Button>
    </form>
  );
};
