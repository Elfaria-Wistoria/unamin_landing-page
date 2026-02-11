import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950" id="about">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900">
                            {/* Placeholder for Campus/Rector Image */}
                            <div className="aspect-[4/3] relative group">
                                <Image
                                    src="/images/rektor.jpeg"
                                    alt="Dr. H. Muhammad Ali, M.M., M.H."
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <p className="text-white font-bold text-xl">Dr. H. Muhammad Ali, M.M., M.H.</p>
                                    <p className="text-green-400 font-medium text-sm tracking-wider uppercase">Rektor UNAMIN</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background accent */}
                        <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-primary/10 rounded-2xl" />
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                            Tentang Kami
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Pusat Keunggulan Pendidikan di <span className="text-primary">Papua Barat Daya</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Universitas Muhammadiyah Sorong (UNAMIN) adalah institusi pendidikan tinggi yang berdedikasi untuk mencetak lulusan yang tidak hanya unggul secara akademis, tetapi juga memiliki integritas moral dan spiritual yang kuat sesuai nilai-nilai Al-Islam dan Kemuhammadiyahan.
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Terakreditasi Baik Sekali oleh BAN-PT",
                                "Fasilitas pembelajaran modern dan lengkap",
                                "Dosen berkualifikasi S2 dan S3 profesional",
                                "Jaringan kerjasama nasional dan internasional"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
                                <Link href="/profil">
                                    Selengkapnya Mengenai UNAMIN <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
