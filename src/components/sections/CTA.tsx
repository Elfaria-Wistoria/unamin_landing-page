"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="relative py-32 overflow-hidden bg-slate-950">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-950 to-black opacity-90" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Glass Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-16 text-center max-w-5xl mx-auto overflow-hidden shadow-2xl"
                >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center space-y-8">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-300 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]"
                        >
                            <Sparkles className="w-4 h-4 text-green-400" />
                            <span className="tracking-wide">Penerimaan Mahasiswa Baru 2026/2027</span>
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl">
                            Wujudkan Masa Depan <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 animate-gradient-x">
                                Gemilang Bersama Kami
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                            Bergabunglah dalam komunitas akademik yang inovatif, islami, dan berwawasan global. Langkah awal kesuksesanmu dimulai di sini.
                        </p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-5 pt-6 w-full sm:w-auto"
                        >
                            <Button asChild size="lg" className="bg-green-600 hover:bg-green-500 text-white text-lg h-14 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(22,163,74,0.5)] hover:shadow-[0_0_60px_-15px_rgba(22,163,74,0.6)] transition-all duration-300 hover:scale-105 border-t border-white/20">
                                <Link href="https://siakad.um-sorong.ac.id/pmb.php" className="flex items-center gap-3">
                                    <GraduationCap className="w-6 h-6" />
                                    Daftar Sekarang
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="lg" className="border-white/10 bg-white/5 hover:bg-white/10 text-white text-lg h-14 px-10 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
                                <Link href="/kontak" className="flex items-center gap-3">
                                    Hubungi Kami <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Decorative 3D Elements (Abstract) */}
                    <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-2xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-emerald-500/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
                </motion.div>
            </div>
        </section>
    );
}
