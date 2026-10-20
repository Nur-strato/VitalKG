import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
            <h2 className="text-3xl font-bold mb-2">404 — Страница не найдена</h2>
            <p className="text-slate-400 mb-6">Запрашиваемый ресурс не существует.</p>
            <Link
                href="/"
                className="px-4 py-2 bg-emerald-500 text-slate-950 font-bold rounded-xl"
            >
                Вернуться на главную
            </Link>
        </div>
    );
}