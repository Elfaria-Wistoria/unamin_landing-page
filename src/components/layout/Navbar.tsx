"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { NAV_LINKS, TOP_BAR_LINKS } from "@/lib/constants";

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 flex flex-col w-full transition-all duration-300",
            isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
        )}>
            {/* 1. TOP BAR (Utility & Social) */}
            <div className={cn(
                "w-full transition-all duration-300 overflow-hidden",
                isScrolled ? "h-0 opacity-0" : "h-8 bg-black/20 backdrop-blur-sm text-white/90"
            )}>
                <div className="container mx-auto px-4 h-full flex justify-between items-center text-[10px] font-medium">
                    <div className="flex items-center gap-4">
                        {TOP_BAR_LINKS.map((link) => (
                            <Link key={link.label} href={link.href} className="flex items-center gap-1 hover:text-green-300 transition-colors">
                                {link.label}
                                {(link.label === "Media" || link.label === "Akses Cepat" || link.label === "Sisfo") && (
                                    <ChevronDown className="h-2.5 w-2.5 opacity-70" />
                                )}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="#" className="hover:text-green-300"><Facebook className="h-3 w-3" /></Link>
                        <Link href="#" className="hover:text-green-300"><Twitter className="h-3 w-3" /></Link>
                        <Link href="#" className="hover:text-green-300"><Instagram className="h-3 w-3" /></Link>
                    </div>
                </div>
            </div>

            {/* 2. BRAND SECTION (Logo & Contact) */}
            <div className={cn(
                "w-full transition-all duration-300",
                isScrolled ? "h-0 opacity-0 overflow-hidden py-0" : "py-4 border-b border-white/10"
            )}>
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Logo - Full Size */}
                    <Link href="/" className="relative h-16 w-64 hover:opacity-90 transition-opacity mr-8">
                        <Image
                            src="/images/logo-unamin.png"
                            alt="Logo UNAMIN"
                            fill
                            className="object-contain object-left"
                            unoptimized
                        />
                    </Link>

                    {/* Contact Info (Right Side) */}
                    <div className="hidden md:flex items-center gap-8 text-right text-white">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-slate-300 font-bold tracking-wider uppercase">Email</span>
                            <a href="mailto:info@um-sorong.ac.id" className="font-bold text-sm hover:text-green-300 transition-colors">
                                info@um-sorong.ac.id
                            </a>
                        </div>
                        <div className="border-l border-white/20 h-8 w-px" />
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-slate-300 font-bold tracking-wider uppercase">Telp.</span>
                            <a href="tel:0951322382" className="font-bold text-sm hover:text-green-300 transition-colors">
                                (0951) 322382
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. NAVIGATION BAR (Sticky) */}
            <div className={cn(
                "w-full transition-all duration-300",
                isScrolled ? "h-16 border-b border-slate-200 dark:border-slate-800" : "h-16 bg-transparent"
            )}>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Desktop Menus */}
                        <div className="hidden xl:flex items-center w-full relative justify-center">
                            <nav className="flex items-center justify-center gap-1">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "px-4 py-2 text-[13px] font-bold uppercase transition-colors rounded-sm whitespace-nowrap",
                                            pathname === link.href
                                                ? (isScrolled ? "text-green-600 bg-green-50/50" : "text-white bg-white/20")
                                                : (isScrolled ? "text-slate-600 hover:text-green-600 hover:bg-slate-50" : "text-white/90 hover:text-white hover:bg-white/10")
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            {/* Sticky Logo removed as per request */}
                        </div>

                        {/* Mobile Trigger */}
                        <div className="xl:hidden flex items-center justify-between w-full">
                            {/* Mobile Logo shows when scrolled or always? Let's show small logo when scrolled */}
                            <div className={cn("relative h-8 w-32 transition-opacity", !isScrolled && "opacity-0")}>
                                <Image
                                    src="/images/logo-unamin.png"
                                    alt="Logo UNAMIN"
                                    fill
                                    className="object-contain object-left"
                                    unoptimized
                                />
                            </div>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className={isScrolled ? "text-slate-900" : "text-white hover:bg-white/10"}>
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px]">
                                    <div className="relative h-12 w-40 mb-6 mt-4">
                                        <Image
                                            src="/images/logo-unamin.png"
                                            alt="Logo UNAMIN"
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                    <nav className="flex flex-col gap-2">
                                        {NAV_LINKS.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="px-2 py-2 text-sm font-semibold text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded-md"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
