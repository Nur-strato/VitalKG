'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
    selectedRoute: string;
}

export default function RealLeafletMap({ selectedRoute }: Props) {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const routeLayersRef = useRef<L.LayerGroup | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        if (!mapInstanceRef.current) {
            // Инициализируем карту БЕЗ стандартного блока атрибуции (скрываем Leaflet с флагом)
            const map = L.map(mapContainerRef.current, {
                center: [42.8755, 74.5990],
                zoom: 14,
                zoomControl: false,
                attributionControl: false, // ПОЛНОСТЬЮ ОТКЛЮЧАЕТ плашку Leaflet с флагом
            });

            // Подключаем тайлы без привязанного флага
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            // Зум справа вверху
            L.control.zoom({ position: 'topright' }).addTo(map);

            mapInstanceRef.current = map;
            routeLayersRef.current = L.layerGroup().addTo(map);
        }

        const layers = routeLayersRef.current;
        if (!layers) return;

        layers.clearLayers();

        // 1. Точка СТАРТА: Novotel Bishkek
        const startCoords: [number, number] = [42.8738, 74.5860];
        const startIcon = L.divIcon({
            className: 'custom-pin',
            html: `<div style="background-color: #064e3b; width: 32px; height: 32px; border-radius: 50%; border: 3px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3); color: white; font-weight: bold; font-size: 13px;">A</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
        });
        L.marker(startCoords, { icon: startIcon })
            .addTo(layers)
            .bindPopup('<b>Старт: Novotel Bishkek</b><br>пр. Манаса, 115');

        // 2. Точка ФИНИША: ЦУМ Бишкек
        const endCoords: [number, number] = [42.8762, 74.6145];
        const endIcon = L.divIcon({
            className: 'custom-pin',
            html: `<div style="background-color: #e11d48; width: 34px; height: 34px; border-radius: 50%; border: 3px solid #ffffff; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(225,29,72,0.4); color: white; font-weight: bold; font-size: 14px;">B</div>`,
            iconSize: [34, 34],
            iconAnchor: [17, 17],
        });
        L.marker(endCoords, { icon: endIcon })
            .addTo(layers)
            .bindPopup('<b>Финиш: ЦУМ Бишкек</b><br>ул. Шопокова / пр. Чуй');

        // 3. Площадь Ала-Тоо
        const alaTooCoords: [number, number] = [42.8765, 74.6037];
        const landmarkIcon = L.divIcon({
            className: 'custom-pin',
            html: `<div style="background-color: #ffffff; padding: 4px 10px; border-radius: 12px; border: 1.5px solid #064e3b; font-size: 11px; font-weight: bold; color: #064e3b; box-shadow: 0 2px 8px rgba(0,0,0,0.15); white-space: nowrap;">🏛️ Площадь Ала-Тоо</div>`,
            iconSize: [130, 26],
            iconAnchor: [65, 13],
        });
        L.marker(alaTooCoords, { icon: landmarkIcon }).addTo(layers);

        // 4. Зеленый доступный маршрут
        const accessiblePath: [number, number][] = [
            [42.8738, 74.5860],
            [42.8745, 74.5860],
            [42.8745, 74.5950],
            [42.8758, 74.5950],
            [42.8760, 74.6037],
            [42.8760, 74.6145],
            [42.8762, 74.6145],
        ];

        L.polyline(accessiblePath, {
            color: '#059669',
            weight: 6,
            opacity: 0.95,
            lineCap: 'round',
            lineJoin: 'round',
        }).addTo(layers);

        // 5. Пандусы
        const rampIcon = L.divIcon({
            className: 'custom-pin',
            html: `<div style="background: #064e3b; color: #ffffff; width: 22px; height: 22px; border-radius: 50%; border: 2px solid #ffffff; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; box-shadow: 0 2px 6px rgba(0,0,0,0.25);">✓</div>`,
            iconSize: [22, 22],
            iconAnchor: [11, 11],
        });

        L.marker([42.8745, 74.5860], { icon: rampIcon })
            .addTo(layers)
            .bindPopup('<b>Пандус: Манаса / Киевская</b><br>Уклон 4.5°, подтвержден');

        L.marker([42.8758, 74.5950], { icon: rampIcon })
            .addTo(layers)
            .bindPopup('<b>Пологий съезд в сквер</b><br>Перепад высоты 0 см');

        // 6. Красный барьер
        const barrierIcon = L.divIcon({
            className: 'custom-pin',
            html: `<div style="background: #ef4444; color: #ffffff; width: 26px; height: 26px; border-radius: 50%; border: 2px solid #ffffff; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; box-shadow: 0 2px 8px rgba(239,68,68,0.5);">✕</div>`,
            iconSize: [26, 26],
            iconAnchor: [13, 13],
        });

        L.marker([42.8752, 74.5885], { icon: barrierIcon })
            .addTo(layers)
            .bindPopup('<b>Критический барьер: Чуй / Исанова</b><br>Бордюр 24 см без съезда');

        // Альтернативный трек
        const standardPath: [number, number][] = [
            [42.8738, 74.5860],
            [42.8752, 74.5860],
            [42.8752, 74.5885],
            [42.8752, 74.6145],
            [42.8762, 74.6145],
        ];

        L.polyline(standardPath, {
            color: '#94a3b8',
            weight: 4,
            dashArray: '6, 8',
            opacity: 0.7,
        }).addTo(layers);

    }, [selectedRoute]);

    return <div ref={mapContainerRef} className="w-full h-full min-h-[580px] z-0" />;
}