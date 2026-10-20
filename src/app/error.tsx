'use client';

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold text-rose-400 mb-2">Произошла ошибка</h2>
            <p className="text-slate-400 mb-6 text-sm">{error.message || 'Непредвиденный сбой приложения'}</p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700"
            >
                Попробовать снова
            </button>
        </div>
    );
}