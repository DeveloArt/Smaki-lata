import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-base-100 p-4">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body items-center text-center">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="card-title text-2xl">Strona nie znaleziona</h2>
          <p className="py-4">
            Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.
          </p>
          <div className="card-actions">
            <Link href="/dashboard" className="btn btn-primary">
              Wróć do strony głównej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 