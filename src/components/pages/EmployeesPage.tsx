'use client';
import { Button } from '@/components/atoms/Button';
import React, { useEffect, useState } from 'react';
import { icons } from '@/assets/icons';
import { SignUpForm } from '@/components/molecules/SignUpForm';
import uuid from 'react-uuid';
import { EmployeeType } from '@/helpers/schemas';
import {
  createNewEmployee,
  deleteEmployeeById,
  editEmployeeById,
  getAllEmployees,
} from '@/api/employeesOperapions';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryClientParams } from '@/helpers/queryClientParams';
import { useRef } from 'react';
// import { queryClient } from '@/helpers/queryClient';
export const EmployeesPage: React.FC = () => {
  const [editingEmployee, setEditingEmployee] = useState<EmployeeType | null>(null);

  const queryClient = useQueryClient();
  const modalRef = useRef<HTMLDialogElement>(null);

  const onSubmit = async (data: EmployeeType) => {
    const isEdit = !!editingEmployee;
    const newEmployee = isEdit ? { ...editingEmployee, ...data } : { ...data, id: uuid() };

    if (isEdit) {
      await editEmployeeById(newEmployee, newEmployee.id);
    } else {
      await createNewEmployee(newEmployee as EmployeeType);
    }

    queryClient.invalidateQueries({ queryKey: ['employee'] });
    setEditingEmployee(null); // 🧼 Очистити після сабміту
    modalRef.current?.close();
  };

  const { data: dataEmployees } = useQuery(
    {
      queryKey: ['employee'],
      queryFn: async () => await getAllEmployees(),
    },
    queryClientParams
  );
  const deleteEmployee = async (id: string) => {
    await deleteEmployeeById(id);
    queryClient.invalidateQueries({ queryKey: ['employee'] });
  };
  const editEmployee = (id: string) => {
    const employee = dataEmployees?.find(emp => emp.id === id);
    if (employee) {
      setEditingEmployee(employee); // встановлюємо поточного
      modalRef.current?.showModal(); // відкриваємо модалку
    }
  };

  useEffect(() => {
    const modal = modalRef.current;

    const handleClose = () => {
      setEditingEmployee(null);
    };

    if (modal) {
      modal.addEventListener('close', handleClose);
    }

    return () => {
      if (modal) {
        modal.removeEventListener('close', handleClose);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pracownicy</h1>
        <Button
          variant="add"
          size="lg"
          onClick={() => {
            setEditingEmployee(null);
            const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
            if (modal) {
              modal.showModal();
            }
          }}
        >
          <icons.add className="h-5 w-5" />
          <span className="text-sm font-medium">Dodaj pracownika</span>
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        {dataEmployees?.length === 0 ? (
          <p>Lista pracowników będzie dostępna wkrótce.</p>
        ) : (
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              <thead>
                <tr>
                  <th>imie</th>
                  <th>nazwisko</th>
                  <th>telefon</th>
                  <th>email</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {dataEmployees?.map(employee => (
                  <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.telNumber}</td>
                    <td>{employee.email}</td>
                    <td>
                      <div className="flex gap-2">
                        <icons.edit
                          className="h-5 w-5 fill-[#c4c4c4] hover:fill-green-500 cursor-pointer"
                          onClick={() => editEmployee(employee.id)}
                        />
                        <icons.delete
                          className="h-5 w-5 fill-[#c4c4c4] hover:fill-red-500 cursor-pointer"
                          onClick={() => deleteEmployee(employee.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <dialog id="my_modal_2" className="modal" ref={modalRef}>
        <div className="modal-box">
          <SignUpForm onSubmit={onSubmit} defaultValues={editingEmployee} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
