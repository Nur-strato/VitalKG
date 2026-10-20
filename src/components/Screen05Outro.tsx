'use client';

export default function Screen05Outro() {
    return (
        <div className="w-full bg-[#f4f4ee] rounded-[32px] sm:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] border border-[#e5e5dc] overflow-hidden">
            {/* Хедер 5-го экрана */}
            <div className="px-8 sm:px-12 pt-8 sm:pt-10 pb-5 flex items-center justify-between border-b border-[#e6e6dc]">
                <span className="font-bold text-lg tracking-tight text-[#064e3b]">AccessKG</span>
                <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-[#72837b] uppercase">
          05 / ИТОГ
        </span>
            </div>

            <div className="px-8 sm:px-12 py-14 text-center space-y-4 bg-[#edece5]">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#064e3b] leading-snug">
                    «Доступность — не привилегия. <br />Это базовое право.»
                </h2>
                <p className="text-xs sm:text-sm text-[#72837b] max-w-md mx-auto">
                    Logos Hackathon 2026 · Novotel Бишкек
                </p>
            </div>
        </div>
    );
}