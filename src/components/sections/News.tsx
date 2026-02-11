import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const newsItems = [
    {
        id: 1,
        title: "Education Week 2026 UNAMIN Resmi Dibuka",
        excerpt: "Memperkuat peran UNAMIN dalam pengembangan bakat pelajar melalui serangkaian kompetisi akademik dan non-akademik.",
        date: "11 Feb 2026",
        author: "Humas UNAMIN",
        category: "Akademik",
    },
    {
        id: 2,
        title: "Produktif Tanpa Mengorbankan Sehat: Mitos atau Fakta?",
        excerpt: "Seminar kesehatan mental bagi mahasiswa untuk menjaga keseimbangan antara produktivitas akademik dan kesehatan pribadi.",
        date: "11 Feb 2026",
        author: "BEM UNAMIN",
        category: "Seminar",
    },
    {
        id: 3,
        title: "UNAMIN Gelar Sosialisasi PPK Ormawa",
        excerpt: "Sosialisasi program penguatan kapasitas organisasi kemahasiswaan untuk meningkatkan kualitas kegiatan mahasiswa.",
        date: "10 Feb 2026",
        author: "Kemahasiswaan",
        category: "Kemahasiswaan",
    },
];

export function News() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden" id="berita">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[0%] w-[60vh] h-[60vh] bg-green-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Berita & Kegiatan Terbaru
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Ikuti perkembangan terkini seputar kegiatan akademik dan kemahasiswaan di UNAMIN.
                        </p>
                    </div>
                    <Button asChild variant="ghost" className="hidden md:flex text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full px-6">
                        <Link href="/berita">
                            Lihat Semua Berita <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <Card key={item.id} className="group flex flex-col h-full bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden rounded-2xl">
                            {/* Image Placeholder */}
                            <div className="aspect-video w-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                                <Image
                                    src="/images/news-placeholder.jpg"
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute top-4 left-4 bg-green-600/90 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm z-10">
                                    {item.category}
                                </div>
                            </div>

                            <CardHeader className="space-y-3 pb-4">
                                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5 text-green-600" />
                                        {item.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="h-3.5 w-3.5 text-green-600" />
                                        {item.author}
                                    </div>
                                </div>
                                <CardTitle className="line-clamp-2 text-xl font-bold group-hover:text-green-700 transition-colors cursor-pointer leading-tight">
                                    <Link href={`/berita/${item.id}`}>{item.title}</Link>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="flex-grow">
                                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed">
                                    {item.excerpt}
                                </p>
                            </CardContent>

                            <CardFooter className="pt-0 border-t border-slate-50 dark:border-slate-800 mt-4 p-6">
                                <Link
                                    href={`/berita/${item.id}`}
                                    className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-2 group/link"
                                >
                                    Baca Selengkapnya <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <Button asChild variant="outline" className="w-full rounded-full border-green-200 text-green-700">
                        <Link href="/berita">
                            Lihat Semua Berita
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
