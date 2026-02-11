import Link from "next/link";
import { ArrowRight, Gavel, Cog, TrendingUp, Users, Sprout, BookOpen, Fish } from "lucide-react";

const faculties = [
    {
        name: "Fakultas Teknik",
        slug: "teknik",
        description: "Teknik Sipil, Teknik Industri, Teknik Informatika",
        color: "from-blue-500 to-cyan-400",
        icon: Cog,
    },
    {
        name: "Fakultas Ekonomi",
        slug: "ekonomi",
        description: "Manajemen, Akuntansi, Ekonomi Pembangunan",
        color: "from-yellow-400 to-orange-500",
        icon: TrendingUp,
    },
    {
        name: "Fakultas Hukum",
        slug: "hukum",
        description: "Ilmu Hukum",
        color: "from-red-500 to-pink-500",
        icon: Gavel,
    },
    {
        name: "Fakultas ISIP",
        slug: "isip",
        description: "Ilmu Pemerintahan, Ilmu Administrasi Negara, Sosiologi",
        color: "from-orange-400 to-red-400",
        icon: Users,
    },
    {
        name: "Fakultas Pertanian",
        slug: "pertanian",
        description: "Agroteknologi, Agribisnis, Kehutanan",
        color: "from-green-500 to-emerald-400",
        icon: Sprout,
    },
    {
        name: "Fakultas KIP",
        slug: "fkip",
        description: "Pendidikan Bahasa Inggris, Pendidikan Matematika",
        color: "from-purple-500 to-indigo-400",
        icon: BookOpen,
    },
    {
        name: "Fakultas Perikanan",
        slug: "perikanan",
        description: "Budidaya Perairan, Manajemen Sumber Daya Perairan",
        color: "from-cyan-500 to-blue-500",
        icon: Fish,
    },
];

export function Faculties() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[40vh] h-[40vh] bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[10%] right-[5%] w-[40vh] h-[40vh] bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-center md:text-left">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                            Pilihan <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Fakultas</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            Temukan passion dan kembangkan potensimu di salah satu dari {faculties.length} fakultas unggulan kami.
                        </p>
                    </div>
                    <Link
                        href="/akademik"
                        className="group flex items-center font-semibold text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-all shadow-lg shadow-green-600/20 hover:shadow-green-600/40 hover:-translate-y-0.5"
                    >
                        Lihat Semua Program Studi <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {faculties.map((faculty) => (
                        <Link
                            href={`/fakultas/${faculty.slug}`}
                            key={faculty.slug}
                            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${faculty.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            {/* Card Content */}
                            <div className="p-8 relative z-10 h-full flex flex-col">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${faculty.color} p-0.5 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[14px] flex items-center justify-center">
                                        <faculty.icon className="w-7 h-7 text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors">
                                    {faculty.name}
                                </h3>

                                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-6 flex-grow leading-relaxed">
                                    {faculty.description}
                                </p>

                                <div className="flex items-center text-sm font-semibold text-green-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    Jelajahi Fakultas <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>

                            {/* Corner Decor */}
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${faculty.color} opacity-10 blur-2xl rounded-bl-full -mr-10 -mt-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-150`} />
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/akademik"
                        className="inline-flex items-center font-bold text-green-600 hover:text-green-700 transition-colors"
                    >
                        Lihat Semua Program Studi <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
