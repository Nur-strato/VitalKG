'use client';

import { ArrowRight, Compass, ShieldCheck, MapPin, Sparkles, Navigation2 } from 'lucide-react';

interface Props {
    onExploreClick: () => void;
}

export default function Screen01Hero({ onExploreClick }: Props) {
    return (
        <div className="w-full bg-[#f4f4ee] rounded-[36px] sm:rounded-[44px] border border-[#e5e5dc] shadow-[0_24px_70px_-15px_rgba(0,0,0,0.08)] overflow-hidden">

            {/* Верхний бейдж слайда */}
            <div className="px-8 sm:px-14 pt-8 sm:pt-10 pb-4 border-b border-[#e5e5dc] flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#064e3b] text-white flex items-center justify-center shadow-md">
                        <Compass className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                        <span className="font-extrabold text-xl tracking-tight text-[#064e3b]">AccessKG</span>
                        <span className="text-xs font-mono text-[#72837b] block sm:inline sm:ml-2">· Pitch Deck 2026</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#dbece2] text-[#064e3b] text-xs font-semibold font-mono tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            LOGOS HACKATHON
          </span>
                    <span className="hidden sm:inline text-xs font-mono text-[#72837b]">Novotel Bishkek</span>
                </div>
            </div>

            {/* Тело презентационного слайда 1 */}
            <div className="p-8 sm:p-14 space-y-10">

                {/* Заголовок-оффер */}
                <div className="space-y-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#deded2] text-xs font-medium text-[#064e3b] shadow-sm">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>Первая специализированная цифровая карта доступности в Кыргызстане</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#064e3b] leading-[1.05]">
                        Город должен быть <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#064e3b] via-[#059669] to-[#047857]">
              доступен каждому.
            </span>
                    </h1>

                    <p className="text-lg sm:text-2xl text-[#52635b] font-normal leading-relaxed max-w-3xl pt-2">
                        Там, где обычные карты видят прямую дорогу, мы видим бордюры 24 см, отсутствие пандусов и арыки. AccessKG прокладывает маршрут сквозь реальный городской рельеф.
                    </p>
                </div>

                {/* 3 ключевых тезиса слайда (для жюри) */}
                <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 pt-2">
                    <div className="p-6 rounded-3xl bg-white border border-[#deded2] shadow-sm flex flex-col justify-between space-y-4">
                        <div className="w-10 h-10 rounded-2xl bg-[#dbece2] text-[#064e3b] flex items-center justify-center font-bold">
                            01
                        </div>
                        <div>
                            <div className="text-base font-bold text-[#1c2c26]">Слой полевых данных</div>
                            <p className="text-xs text-[#72837b] mt-1 leading-normal">
                                Замеры высоты каждого съезда с точностью до 1 см, а не субъективные отзывы.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-white border border-[#deded2] shadow-sm flex flex-col justify-between space-y-4">
                        <div className="w-10 h-10 rounded-2xl bg-[#dbece2] text-[#064e3b] flex items-center justify-center font-bold">
                            02
                        </div>
                        <div>
                            <div className="text-base font-bold text-[#1c2c26]">Умный граф пути</div>
                            <p className="text-xs text-[#72837b] mt-1 leading-normal">
                                Алгоритм штрафует лестницы и направляет человека через пологие пандусы.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-white border border-[#deded2] shadow-sm flex flex-col justify-between space-y-4">
                        <div className="w-10 h-10 rounded-2xl bg-[#dbece2] text-[#064e3b] flex items-center justify-center font-bold">
                            03
                        </div>
                        <div>
                            <div className="text-base font-bold text-[#1c2c26]">Для всего города</div>
                            <p className="text-xs text-[#72837b] mt-1 leading-normal">
                                Колясочники, родители с детскими колясками, маломобильные и пожилые люди.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Прямой призыв к действию */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#e5e5dc]">
                    <button
                        onClick={onExploreClick}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#064e3b] hover:bg-[#083e30] text-white text-base font-bold rounded-2xl transition-all shadow-lg active:scale-95 cursor-pointer"
                    >
                        <span>Перейти к интерактивному демо</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#72837b]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Проверенный полигон Бишкека
            </span>
                        <span>·</span>
                        <span>ЦУР 10 & 11</span>
                    </div>
                </div>

            </div>

        </div>
    );
}