'use client';

export default function Screen04Impact() {
    return (
        <div className="w-full bg-[#f4f4ee] rounded-[32px] sm:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] border border-[#e5e5dc] overflow-hidden">
            {/* Хедер 4-го экрана */}
            <div className="px-8 sm:px-12 pt-8 sm:pt-10 pb-5 flex items-center justify-between border-b border-[#e6e6dc]">
                <span className="font-bold text-lg tracking-tight text-[#064e3b]">AccessKG</span>
                <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-[#72837b] uppercase">
          04 / ВОЗДЕЙСТВИЕ
        </span>
            </div>

            <div className="px-8 sm:px-12 py-10 space-y-6">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-5">
                        <div className="p-6 rounded-2xl bg-[#064e3b] text-white space-y-2">
                            <span className="text-[11px] font-mono text-[#a3c9b8] uppercase">Для города</span>
                            <div className="text-xl font-bold">Тепловая карта съездов</div>
                            <p className="text-xs text-[#cbe2d7] leading-relaxed">
                                Помогает мэрии Бишкека точечно устанавливать пандусы там, где они нужнее всего.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-7 space-y-3">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064e3b] leading-tight">
                            Более доступный Бишкек.
                        </h2>
                        <p className="text-sm sm:text-base text-[#52635b] leading-relaxed">
                            Достоверные данные помогают людям планировать передвижение, а городу — находить места, требующие улучшений.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
              <span className="bg-[#ebebe4] px-3.5 py-1.5 rounded-full text-[#064e3b] font-medium border border-[#deded4]">
                ЦУР 10 — сокращение неравенства
              </span>
                            <span className="bg-[#ebebe4] px-3.5 py-1.5 rounded-full text-[#064e3b] font-medium border border-[#deded4]">
                ЦУР 11 — устойчивые города
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}