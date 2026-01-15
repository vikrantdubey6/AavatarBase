"use client";

import Link from "next/link";
import { Github, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 glass">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Zap size={18} className="text-white fill-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        AavatarBase
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#styles" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        Styles
                    </Link>
                    <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                        FAQ
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/dicebear/dicebear"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-200"
                    >
                        <Github size={18} />
                        <span className="text-sm font-medium hidden sm:inline">Star on GitHub</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
