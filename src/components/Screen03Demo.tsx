'use client';

import { MapPin, SlidersHorizontal, Accessibility, ArrowRight } from 'lucide-react';
import InteractiveMap from './InteractiveMap';

export default function Screen03Demo() {
    return (
        <div id="screen-03" className="w-full space-y-8 scroll-mt-6">

            {/* Шапка 3-го экрана */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-3">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#064e3b]">
                        03 • РЕШЕНИЕ
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-[#064e3b] leading-tight tracking-tight">
                        Найти путь, <br />
                        который доступен
                    </h2>
                    <p className="text-sm sm:text-base text-[#52635b] leading-relaxed max-w-xl">
                        AccessKG анализирует городскую среду и строит маршруты с учётом реальной доступности: пандусов, ровных тротуаров, отсутствия лестниц и других барьеров.
                    </p>
                </div>

                {/* 3 шага с иконками */}
                <div className="lg:col-span-6 flex items-center justify-between gap-3 pt-2">
                    <div className="flex-1 space-y-2 text-center sm:text-left">
                        <div className="w-11 h-11 rounded-full bg-[#dbece2] text-[#064e3b] flex items-center justify-center mx-auto sm:mx-0 shadow-sm">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-semibold text-[#1c2c26]">
                            Вы указываете точку назначения
                        </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#a3b1a8] shrink-0" />

                    <div className="flex-1 space-y-2 text-center sm:text-left">
                        <div className="w-11 h-11 rounded-full bg-[#dbece2] text-[#064e3b] flex items-center justify-center mx-auto sm:mx-0 shadow-sm">
                            <SlidersHorizontal className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-semibold text-[#1c2c26]">
                            Мы анализируем доступность маршрутов
                        </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#a3b1a8] shrink-0" />

                    <div className="flex-1 space-y-2 text-center sm:text-left">
                        <div className="w-11 h-11 rounded-full bg-[#dbece2] text-[#064e3b] flex items-center justify-center mx-auto sm:mx-0 shadow-sm">
                            <Accessibility className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-semibold text-[#1c2c26]">
                            Получаете удобный и безопасный маршрут
                        </div>
                    </div>
                </div>
            </div>

            {/* Интерактивная карта */}
            <InteractiveMap />

            {/* Нижний баннер с ростком */}
            <div className="p-6 rounded-[28px] bg-[#dbece2]/60 border border-[#c6dfd0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                    <span className="text-2xl">🌱</span>
                    <div>
                        <div className="text-sm font-bold text-[#064e3b]">
                            Доступность начинается с достоверной информации
                        </div>
                        <div className="text-xs text-[#52635b]">
                            Мы собираем и используем данные о городской инфраструктуре, чтобы каждый мог строить безопасные маршруты в Бишкеке.
                        </div>
                    </div>
                </div>

                <div className="text-[11px] font-mono text-[#064e3b] bg-white px-3.5 py-1.5 rounded-full border border-[#c6dfd0] shrink-0 font-medium">
                    Прототип · Данные постоянно обновляются
                </div>
            </div>

        </div>
    );
}