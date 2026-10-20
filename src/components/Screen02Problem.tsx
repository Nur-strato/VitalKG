'use client';

import { AlertTriangle, X, Check, ArrowRight, Ban, Footprints } from 'lucide-react';

export default function Screen02Problem() {
    return (
        <div className="w-full bg-[#f4f4ee] rounded-[36px] sm:rounded-[44px] border border-[#e5e5dc] shadow-[0_24px_70px_-15px_rgba(0,0,0,0.08)] overflow-hidden">

            {/* Хедер слайда */}
            <div className="px-8 sm:px-14 pt-8 sm:pt-10 pb-4 border-b border-[#e5e5dc] flex items-center justify-between">
                <span className="font-extrabold text-xl tracking-tight text-[#064e3b]">AccessKG</span>
                <span className="text-xs font-mono font-semibold tracking-wider text-[#b91c1c] uppercase bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
          02 / ПРОБЛЕМА: СЛЕПАЯ ЗОНА НАВИГАЦИИ
        </span>
            </div>

            <div className="p-8 sm:p-14 space-y-10">

                {/* Презентационный заголовок */}
                <div className="space-y-3 max-w-3xl">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#72837b]">
                        РЕАЛЬНОСТЬ ГОРОДСКОЙ СРЕДЫ БИШКЕКА
                    </div>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#064e3b] leading-[1.1]">
                        Короткий путь — <br />
                        <span className="text-rose-700">не всегда доступный.</span>
                    </h2>
                    <p className="text-base sm:text-xl text-[#52635b] leading-relaxed">
                        Обычный навигатор строит путь за 6 минут. Но для человека на коляске этот же маршрут заканчивается непреодолимым барьером через 300 метров.
                    </p>
                </div>

                {/* СПЛИТ-СРАВНЕНИЕ ДЛЯ ЖЮРИ (VS SCREEN) */}
                <div className="grid lg:grid-cols-2 gap-6 items-stretch">

                    {/* Левая колонка: Что обещает обычная карта */}
                    <div className="p-7 rounded-3xl bg-white border border-[#deded2] shadow-sm flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-[#72837b] uppercase">Обычные карты (2ГИС / Яндекс)</span>
                                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-600 font-mono text-xs font-semibold">
                  Теория
                </span>
                            </div>
                            <div className="text-2xl font-bold text-[#1c2c26]">
                                «Пешком: 540 метров · 6 минут»
                            </div>
                            <p className="text-xs sm:text-sm text-[#72837b] leading-relaxed">
                                Алгоритм видит лишь двухмерную геометрию тротуара и считает, что пешеход может пройти где угодно по прямой.
                            </p>
                        </div>

                        {/* Визуальная имитация плоской карты */}
                        <div className="h-32 rounded-2xl bg-[#f0f0ea] border border-[#e5e5dc] flex items-center justify-center p-4 text-center">
                            <div className="space-y-1">
                                <div className="text-xs font-mono text-[#72837b]">Слой доступности:</div>
                                <div className="text-lg font-bold text-[#1c2c26]">ОТСУТСТВУЕТ</div>
                                <div className="text-[11px] text-rose-600 font-medium">0 данных о бордюрах и ступенях</div>
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка: Что встречает человек на самом деле */}
                    <div className="p-7 rounded-3xl bg-[#fff7f7] border border-rose-200 shadow-sm flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-rose-700 uppercase font-semibold">Реальность в Бишкеке</span>
                                <span className="px-2.5 py-1 rounded-lg bg-rose-200 text-rose-800 font-mono text-xs font-bold">
                  Тупик
                </span>
                            </div>
                            <div className="text-2xl font-bold text-rose-900">
                                Бордюр 24 см или открытый арык
                            </div>
                            <p className="text-xs sm:text-sm text-rose-700 leading-relaxed">
                                Перепад высоты более 4 см физически непреодолим на активной коляске. Человек вынужден разворачиваться или рисковать жизнью на автодороге.
                            </p>
                        </div>

                        {/* Визуальная плашка замера барьера */}
                        <div className="h-32 rounded-2xl bg-white border border-rose-200 flex items-center justify-around p-4">
                            <div className="text-center">
                                <div className="text-3xl font-black text-rose-600 font-mono">24 см</div>
                                <div className="text-[11px] text-[#72837b] mt-0.5">высота бордюра Чуй / Исанова</div>
                            </div>
                            <div className="w-px h-16 bg-rose-100" />
                            <div className="text-center">
                                <div className="text-3xl font-black text-[#064e3b] font-mono">≤ 2.5 см</div>
                                <div className="text-[11px] text-[#72837b] mt-0.5">норматив безбарьерной среды</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 3 карточки типов барьеров в ряд */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-[#deded2] flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#f5f5f0] flex items-center justify-center text-2xl shrink-0">
                            🪜
                        </div>
                        <div>
                            <div className="text-sm font-bold text-[#1c2c26]">Лестницы без аппарелей</div>
                            <div className="text-xs text-[#72837b]">Блокируют переходы и входы</div>
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#deded2] flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#f5f5f0] flex items-center justify-center text-2xl shrink-0">
                            🚧
                        </div>
                        <div>
                            <div className="text-sm font-bold text-[#1c2c26]">Бордюры и арыки</div>
                            <div className="text-xs text-[#72837b]">Отрезают пешеходные переходы</div>
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#deded2] flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#f5f5f0] flex items-center justify-center text-2xl shrink-0">
                            ❓
                        </div>
                        <div>
                            <div className="text-sm font-bold text-[#1c2c26]">Слепая зона города</div>
                            <div className="text-xs text-[#72837b]">Ни одно приложение не предупреждает</div>
                        </div>
                    </div>
                </div>

                {/* Презентационный вывод */}
                <div className="p-6 rounded-2xl bg-[#1c2c26] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1">
                        <div className="text-sm font-bold flex items-center gap-2 text-emerald-400">
                            <span>→</span>
                            <span>Главный вывод для жюри:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-300">
                            Городская мобильность измеряется не километрами, а непрерывностью доступного покрытия.
                        </p>
                    </div>

                    <div className="px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-emerald-400 shrink-0 border border-white/15">
                        AccessKG решает именно эту задачу
                    </div>
                </div>

            </div>

        </div>
    );
}