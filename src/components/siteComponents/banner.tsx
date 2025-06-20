'use client'

import { useState } from "react"

export default function Banner() {
    const [banner, setBanner] = useState('');

    return (
        <section className="relative w-full h-full overflow-hidden bg-blue-100 grid-rows-3 gap-1">
            {/* Half-visible Wheel */}
            <div className="left-[-750px] transform -translate-x-1/2 w-[90%] h-full rounded-full border-[12px] border-yellow-500 bg-yellow-300 shadow-lg">
                
                {/* Optional inner circle */}
                <div className="w-[65%] h-full bg-yellow-500 rounded-full mx-auto"></div>
            </div>

            <h1> Welcome to summer </h1>
        </section>
    );
}
