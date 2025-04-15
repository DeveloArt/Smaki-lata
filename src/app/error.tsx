"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-base-100 p-4">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
          <h1 className="text-9xl font-bold text-error">500</h1>
          <h2 className="card-title text-2xl">Wystąpił błąd</h2>
          <p className="py-4">
            Przepraszamy, wystąpił nieoczekiwany błąd. Spróbuj ponownie później.
          </p>
          <div className="card-actions flex gap-2">
            <button onClick={() => reset()} className="btn btn-primary">
              Spróbuj ponownie
            </button>
            <Link href="/" className="btn btn-ghost">
              Wróć do strony głównej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 