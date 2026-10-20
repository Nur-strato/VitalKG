'use client';

import Screen01Hero from '../components/Screen01Hero';
import Screen02Problem from '../components/Screen02Problem';
import Screen03Demo from '../components/Screen03Demo';
import Screen04Impact from '../components/Screen04Impact';
import Screen05Outro from '../components/Screen05Outro';

export default function Home() {
    const scrollToMap = () => {
        document.getElementById('screen-03')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#ecece5] py-8 sm:py-16 flex justify-center text-[#1c2c26] selection:bg-[#064e3b] selection:text-white">
            <main className="w-[88%] max-w-[1440px] space-y-12">
                <Screen01Hero onExploreClick={scrollToMap} />
                <Screen02Problem />
                <Screen03Demo />
                <Screen04Impact />
                <Screen05Outro />
            </main>
        </div>
    );
}