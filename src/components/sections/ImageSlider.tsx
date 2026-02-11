"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
    {
        id: 1,
        image: "/images/slide1.jpg",
        alt: "Info & Promo 1",
    },
    {
        id: 2,
        image: "/images/slide2.jpg",
        alt: "Info & Promo 2",
    },
    {
        id: 3,
        image: "/images/slide3.jpg",
        alt: "Info & Promo 3",
    },
];

export function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + slides.length) % slides.length);
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying) {
            timer = setInterval(() => {
                paginate(1);
            }, 5000);
        }
        return () => clearInterval(timer);
    }, [currentIndex, isPlaying]);

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[50vh] h-[50vh] bg-green-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[50vh] h-[50vh] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Info & Promo <span className="text-green-600">Kampus</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Dapatkan informasi terbaru mengenai pendaftaran, beasiswa, dan agenda penting lainnya.
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        <Button
                            size="icon"
                            variant="outline"
                            className="rounded-full border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <div className="flex items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full p-1 shadow-sm">
                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full w-9 h-9 hover:bg-slate-100 dark:hover:bg-slate-800"
                                onClick={() => paginate(-1)}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full w-9 h-9 hover:bg-slate-100 dark:hover:bg-slate-800"
                                onClick={() => paginate(1)}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="relative w-full aspect-video md:h-auto rounded-3xl overflow-hidden group bg-slate-100 dark:bg-slate-900">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full h-full"
                        >
                            <img
                                src={slides[currentIndex].image}
                                alt={slides[currentIndex].alt}
                                className="w-full h-full object-contain"
                                draggable="false"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-300",
                                    index === currentIndex ? "w-8 bg-green-500" : "w-1.5 bg-slate-400/50 hover:bg-slate-400/80"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
