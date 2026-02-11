import { Award, BookOpen, Building2, Globe2, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        icon: Award,
        title: "Terakreditasi Baik Sekali",
        description: "Program studi unggulan dengan akreditasi nasional yang menjamin kualitas pendidikan.",
    },
    {
        icon: BookOpen,
        title: "Kurikulum Berbasis Kompetensi",
        description: "Kurikulum yang relevan dengan kebutuhan industri dan berlandaskan nilai-nilai Islam.",
    },
    {
        icon: Users,
        title: "Dosen Profesional",
        description: "Diajar oleh tenaga pengajar berkualifikasi S2 dan S3 yang berpengalaman di bidangnya.",
    },
    {
        icon: Building2,
        title: "Fasilitas Modern",
        description: "Laboratorium lengkap, perpustakaan digital, dan ruang kelas yang nyaman.",
    },
    {
        icon: Globe2,
        title: "Jaringan Luas",
        description: "Kerjasama dengan berbagai instansi dan universitas dalam dan luar negeri.",
    },
    {
        icon: Lightbulb,
        title: "Pengembangan Karakter",
        description: "Fokus pada pembentukan karakter mahasiswa yang berintegritas dan berakhlak mulia.",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50vh] h-[50vh] bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute top-[40%] -left-[10%] w-[40vh] h-[40vh] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Mengapa Memilih <span className="text-green-600 relative">
                            UNAMIN
                            <svg className="absolute w-full h-2 bottom-0 left-0 text-green-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>?
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        Kami berkomitmen memberikan pendidikan berkualitas terbaik dengan fasilitas standar internasional untuk mempersiapkan masa depan Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-500">
                                <feature.icon className="w-32 h-32 text-green-600" />
                            </div>

                            <div className="w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <feature.icon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
