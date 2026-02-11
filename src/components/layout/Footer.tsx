import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200 border-t border-slate-800 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -bottom-[20%] -left-[10%] w-[50vh] h-[50vh] bg-green-900/10 rounded-full blur-[100px]" />
                <div className="absolute -top-[20%] -right-[10%] w-[40vh] h-[40vh] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative h-20 w-20">
                                <Image
                                    src="/images/logo-unamin.png"
                                    alt="Logo UNAMIN"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <span className="font-bold text-2xl text-white tracking-tight">UNAMIN</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Universitas Muhammadiyah Sorong, perguruan tinggi swasta terkemuka di Papua Barat Daya yang berkomitmen mencetak generasi unggul, berintegritas, dan Islami.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[
                                { icon: Facebook, href: CONTACT_INFO.socials.facebook, label: "Facebook" },
                                { icon: Instagram, href: CONTACT_INFO.socials.instagram, label: "Instagram" },
                                { icon: Youtube, href: CONTACT_INFO.socials.youtube, label: "YouTube" },
                            ].map((social, i) => (
                                <Button key={i} asChild variant="ghost" size="icon" className="group hover:bg-green-500/10 hover:text-green-400 text-slate-400 rounded-lg transition-all duration-300">
                                    <Link href={social.href} target="_blank">
                                        <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                        <span className="sr-only">{social.label}</span>
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-bold text-white mb-6 text-lg">Tentang Kami</h3>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.university.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group w-fit"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover:bg-green-500 transition-colors"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 text-lg">Akademik</h3>
                        <ul className="space-y-3">
                            {[...FOOTER_LINKS.academics, ...FOOTER_LINKS.students].slice(0, 6).map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group w-fit"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover:bg-green-500 transition-colors"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-bold text-white mb-6 text-lg">Hubungi Kami</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-slate-400 text-sm group">
                                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-green-500/10 group-hover:text-green-400 transition-colors">
                                    <MapPin className="h-5 w-5 shrink-0" />
                                </div>
                                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400 text-sm group">
                                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-green-500/10 group-hover:text-green-400 transition-colors">
                                    <Phone className="h-5 w-5 shrink-0" />
                                </div>
                                <span>{CONTACT_INFO.phone}</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400 text-sm group">
                                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-green-500/10 group-hover:text-green-400 transition-colors">
                                    <Mail className="h-5 w-5 shrink-0" />
                                </div>
                                <span>{CONTACT_INFO.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} Universitas Muhammadiyah Sorong. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
