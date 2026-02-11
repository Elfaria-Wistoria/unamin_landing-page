import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function Contact() {
    return (
        <section className="py-20 bg-primary/5 dark:bg-slate-900" id="kontak">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
                    {/* Background Decorative Circles */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl opacity-50" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-white">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                Siap Bergabung dengan Keluarga Besar UNAMIN?
                            </h2>
                            <p className="text-lg text-green-100 max-w-xl">
                                Daftarkan dirimu sekarang dan mulailah perjalanan akademikmu di kampus Islami terbaik di Papua Barat Daya.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 border-none text-base font-bold shadow-xl">
                                    <Link href="https://siakad.um-sorong.ac.id/pmb.php">
                                        Daftar Sekarang
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 border-2 text-base font-bold">
                                    <Link href="/kontak">
                                        Hubungi Kami
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-6 lg:pl-12 border-t lg:border-t-0 lg:border-l border-white/20 pt-8 lg:pt-0">
                            <h3 className="text-xl font-semibold text-white mb-6">Informasi Kontak</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Alamat Kampus</p>
                                        <p className="text-green-100">{CONTACT_INFO.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Telepon</p>
                                        <p className="text-green-100">{CONTACT_INFO.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <p className="text-green-100">{CONTACT_INFO.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
