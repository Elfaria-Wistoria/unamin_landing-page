"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-52 pb-20">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for Campus Image - Replace with real image */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-slate-900 to-black opacity-90" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50" />

                {/* Animated Shapes */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-5">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    Penerimaan Mahasiswa Baru 2026/2027 Dibuka
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl"
                >
                    Membangun Generasi <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Unggul & Islami</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed"
                >
                    Universitas Muhammadiyah Sorong hadir untuk mencetak pemimpin masa depan yang berintegritas, berwawasan global, dan berlandaskan nilai-nilai Islam.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-blue-900/20">
                        <Link href="/pendaftaran" className="flex items-center gap-2">
                            <GraduationCap className="h-5 w-5" />
                            Daftar Sekarang
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-semibold bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                        <Link href="/profil" className="flex items-center gap-2">
                            <PlayCircle className="h-5 w-5" />
                            Tentang Kami
                        </Link>
                    </Button>
                </motion.div>

                {/* Stats Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                >
                    {[
                        { label: "Mahasiswa", value: "3000+" },
                        { label: "Dosen", value: "150+" },
                        { label: "Fakultas", value: "7" },
                        { label: "Prodi", value: "16" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</span>
                            <span className="text-sm text-slate-400 font-medium">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowRight className="h-6 w-6 text-white/50 rotate-90" />
            </div>
        </section>
    );
}
