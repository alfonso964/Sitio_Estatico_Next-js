// components/AutoCarousel.js
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/imagen1.jpg", "/imagen2.jpg", "/imagen3.jpg", "/imagen4.jpg","/imagen5.jpg","/imagen6.jpg"];

export default function AutoCarousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    useEffect(() => {
        const timer = setInterval(() => nextSlide(), 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden rounded-xl">
            {images.map((src, i) => (
                <div
                    key={i}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        i === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <img
                        src={src}
                        alt={`Slide ${i + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Botones de navegación */}
            <button
                type="button"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle bg-black bg-opacity-40 text-white border-none hover:bg-opacity-60 transition-all"
            >
                ❮
            </button>
            <button
                type="button"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle bg-black bg-opacity-40 text-white border-none hover:bg-opacity-60 transition-all"
            >
                ❯
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            i === index ? "bg-white" : "bg-white bg-opacity-50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}