'use client';
import { Button } from '@/components/atoms/Button';
import React from 'react';
import { icons } from '@/assets/icons';
import { SignUpForm } from '@/components/molecules/SignUpForm';
export default function EmployeesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pracownicy</h1>
        <Button
          variant="add"
          size="lg"
          onClick={() => {
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
        <p>Lista pracowników będzie dostępna wkrótce.</p>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">Hello!</h3> */}
          {/* <p className="py-4">Press ESC key or click outside to close</p> */}

          <SignUpForm onSubmit={() => {}} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
