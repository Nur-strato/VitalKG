'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import {
    Accessibility,
    Crosshair,
    X,
    Compass,
    AlertCircle,
    CheckCircle2,
    ChevronRight,
    ShieldCheck,
    Footprints
} from 'lucide-react';

const RealLeafletMap = dynamic(() => import('./RealLeafletMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full min-h-[580px] flex items-center justify-center bg-[#f0f0ea] text-[#064e3b] font-mono text-sm">
            Загрузка карты Бишкека...
        </div>
    ),
});

interface RouteOption {
    id: string;
    distance: string;
    time: string;
    title: string;
    accessible: boolean;
}

const routes: RouteOption[] = [
    {
        id: 'r1',
        distance: '1,8 км',
        time: '28 мин',
        title: 'Полностью доступный маршрут',
        accessible: true,
    },
    {
        id: 'r2',
        distance: '2,4 км',
        time: '36 мин',
        title: 'Есть небольшой уклон (до 6%)',
        accessible: false,
    },
    {
        id: 'r3',
        distance: '2,7 км',
        time: '42 мин',
        title: 'Есть лестница на одном участке',
        accessible: false,
    },
];

export default function InteractiveMap() {
    const [selectedRoute, setSelectedRoute] = useState<string>('r1');
    const [activeFilter, setActiveFilter] = useState<string>('accessible');
    const [destination, setDestination] = useState<string>('ЦУМ Бишкек');

    return (
        <div className="w-full rounded-[32px] bg-[#fbfbf9] border border-[#e5e5dc] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="relative min-h-[640px] grid lg:grid-cols-12">

                {/* ЛЕВАЯ ПАНЕЛЬ (+10% КРУПНЕЕ: lg:col-span-5) */}
                <div className="lg:col-span-5 p-6 sm:p-7 bg-white border-b lg:border-b-0 lg:border-r border-[#e5e5dc] flex flex-col justify-between z-20 shadow-sm">
                    <div className="space-y-5">
                        {/* Логотип */}
                        <div className="flex items-center gap-3 pb-1">
                            <div className="w-9 h-9 rounded-xl bg-[#064e3b] text-white flex items-center justify-center shadow-sm">
                                <Compass className="w-5 h-5 stroke-[2.2]" />
                            </div>
                            <span className="font-extrabold text-xl text-[#064e3b] tracking-tight">AccessKG</span>
                        </div>

                        {/* Инпуты маршрута */}
                        <div className="space-y-2.5">
                            <div className="flex items-center gap-3 px-4 py-3 bg-[#f5f5f0] rounded-2xl border border-[#e5e5dc] text-sm">
                                <span className="w-3 h-3 rounded-full bg-emerald-600 shrink-0" />
                                <span className="text-[#1c2c26] font-medium flex-1 truncate">Novotel (пр. Манаса, 115)</span>
                                <Crosshair className="w-4 h-4 text-[#72837b] shrink-0 cursor-pointer hover:text-[#064e3b]" />
                            </div>

                            <div className="flex items-center gap-3 px-4 py-3 bg-[#f5f5f0] rounded-2xl border border-[#e5e5dc] text-sm">
                                <span className="w-3 h-3 rounded-full bg-rose-500 shrink-0" />
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    className="bg-transparent text-[#1c2c26] font-medium focus:outline-none flex-1 text-sm"
                                />
                                <X
                                    onClick={() => setDestination('')}
                                    className="w-4 h-4 text-[#72837b] shrink-0 cursor-pointer hover:text-rose-600"
                                />
                            </div>
                        </div>

                        {/* 4 кнопки фильтров */}
                        <div className="grid grid-cols-4 gap-2 pt-1">
                            <button
                                onClick={() => setActiveFilter('accessible')}
                                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-2xl border text-[11px] leading-tight transition-all ${
                                    activeFilter === 'accessible'
                                        ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-sm font-semibold'
                                        : 'bg-[#f5f5f0] text-[#52635b] border-transparent hover:border-[#deded4]'
                                }`}
                            >
                                <Accessibility className="w-4 h-4 mb-1.5" />
                                <span className="text-center font-medium">Доступный маршрут</span>
                            </button>

                            <button
                                onClick={() => setActiveFilter('no_stairs')}
                                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-2xl border text-[11px] leading-tight transition-all ${
                                    activeFilter === 'no_stairs'
                                        ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-sm font-semibold'
                                        : 'bg-[#f5f5f0] text-[#52635b] border-transparent hover:border-[#deded4]'
                                }`}
                            >
                                <Footprints className="w-4 h-4 mb-1.5" />
                                <span className="text-center font-medium">Без лестниц</span>
                            </button>

                            <button
                                onClick={() => setActiveFilter('ramps')}
                                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-2xl border text-[11px] leading-tight transition-all ${
                                    activeFilter === 'ramps'
                                        ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-sm font-semibold'
                                        : 'bg-[#f5f5f0] text-[#52635b] border-transparent hover:border-[#deded4]'
                                }`}
                            >
                                <ShieldCheck className="w-4 h-4 mb-1.5" />
                                <span className="text-center font-medium">С пандусами</span>
                            </button>

                            <button
                                onClick={() => setActiveFilter('flat')}
                                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-2xl border text-[11px] leading-tight transition-all ${
                                    activeFilter === 'flat'
                                        ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-sm font-semibold'
                                        : 'bg-[#f5f5f0] text-[#52635b] border-transparent hover:border-[#deded4]'
                                }`}
                            >
                                <CheckCircle2 className="w-4 h-4 mb-1.5" />
                                <span className="text-center font-medium">Ровные тротуары</span>
                            </button>
                        </div>

                        {/* Варианты маршрутов */}
                        <div className="space-y-2.5 pt-1">
                            {routes.map((r) => {
                                const isSelected = selectedRoute === r.id;

                                return (
                                    <div
                                        key={r.id}
                                        onClick={() => setSelectedRoute(r.id)}
                                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                                            isSelected
                                                ? 'bg-[#eef6f1] border-[#064e3b] shadow-sm ring-1 ring-[#064e3b]/10'
                                                : 'bg-[#fafaf7] border-[#e5e5dc] hover:border-[#cfcfc4]'
                                        }`}
                                    >
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-sm font-bold text-[#1c2c26]">
                                                <span className="text-base">🚶</span>
                                                <span>{r.distance} · {r.time}</span>
                                            </div>
                                            <div className="text-xs text-[#52635b]">{r.title}</div>
                                        </div>

                                        <div>
                                            {r.accessible ? (
                                                <div className="w-8 h-8 rounded-full bg-[#064e3b] text-white flex items-center justify-center shadow-sm">
                                                    <Accessibility className="w-4 h-4" />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center">
                                                    <AlertCircle className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="pt-6">
                        <button
                            onClick={() => setSelectedRoute('r1')}
                            className="w-full py-4 bg-[#064e3b] hover:bg-[#083e30] text-white text-sm font-bold rounded-2xl transition-all shadow-md active:scale-[0.98]"
                        >
                            Построить маршрут
                        </button>
                    </div>
                </div>

                {/* ПРАВАЯ ОБЛАСТЬ: РЕАЛЬНАЯ КАРТА (lg:col-span-7) */}
                <div className="lg:col-span-7 relative min-h-[580px] bg-[#edf1ec] flex flex-col justify-between overflow-hidden">

                    <RealLeafletMap selectedRoute={selectedRoute} />

                    {/* Легенда поверх карты слева внизу */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#e5e5dc] shadow-md z-[500] space-y-2.5 text-xs">
                        <div className="flex items-center gap-2.5">
                            <span className="w-5 h-2 rounded-full bg-[#059669]" />
                            <span className="text-[#1c2c26] font-semibold text-xs">Доступный маршрут</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="w-5 h-0.5 border-t-2 border-dashed border-[#94a3b8]" />
                            <span className="text-[#72837b] text-xs">Альтернативный маршрут</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="text-red-500 font-bold text-sm leading-none">✕</span>
                            <span className="text-[#72837b] text-xs">Препятствие (лестница, арык)</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="w-3 h-3 rounded-full bg-[#064e3b]" />
                            <span className="text-[#72837b] text-xs">Пандус</span>
                        </div>
                    </div>

                    {/* КРУПНАЯ КАРТОЧКА ЦУМ БИШКЕК (справа внизу) */}
                    <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl border border-[#deded2] shadow-xl z-[500] flex items-center gap-4 max-w-[340px] hover:shadow-2xl transition-all cursor-pointer">
                        <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-neutral-200 shrink-0 border border-[#e5e5dc]">
                            <img
                                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=350&q=80"
                                alt="ЦУМ Бишкек"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-1 flex-1 min-w-0">
                            <div className="text-sm font-extrabold text-[#1c2c26] tracking-tight truncate">
                                ЦУМ Бишкек
                            </div>
                            <div className="text-xs text-[#72837b]">
                                Торговый центр · пр. Чуй, 155
                            </div>
                            <div className="text-xs font-semibold text-[#064e3b] flex items-center gap-1.5 pt-0.5">
                                <Accessibility className="w-4 h-4 text-[#064e3b]" />
                                <span>Полностью доступный</span>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#8f9f97] shrink-0" />
                    </div>

                    {/* Нейтральная плашка геоданных взамен дефолтного блока с флагом */}
                    <div className="absolute bottom-1.5 right-2.5 text-[10px] font-mono text-[#8f9f97] z-[501] bg-white/70 px-2 py-0.5 rounded backdrop-blur-sm pointer-events-none">
                        📍 Bishkek Urban Grid · Verified Data
                    </div>

                </div>

            </div>
        </div>
    );
}