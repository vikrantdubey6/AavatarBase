import { Zap, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0a0a0b] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                                <Zap size={18} className="text-white fill-white" />
                            </div>
                            <span className="text-xl font-bold">AavatarBase</span>
                        </div>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                            The world's most powerful free online avatar generator. Create unique, randomized avatars
                            for your projects, profiles, and placeholder needs using our high-performance engine.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://x.com/omgvikrant" className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-muted-foreground hover:text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="https://github.com/vikrant6" className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-muted-foreground hover:text-white">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/vikrant-dubey-webdev/" className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-muted-foreground hover:text-white">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>




                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-xs text-muted-foreground uppercase tracking-widest text-center md:text-left">
                    <p>© {new Date().getFullYear()} AavatarBase. Powered by DiceBear.</p>

                    <div>
                        <h4 className="font-semibold mb-6">Support & Feedback</h4>
                        <ul className="text-sm text-muted-foreground font-medium flex gap-4">
                            <li>
                                <a
                                    href="https://buymeacoffee.com/vikrant6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFDD00] text-black font-bold hover:scale-105 transition-transform w-fit"
                                >
                                    <Zap size={16} fill="black" />
                                    Buy Me a Coffee
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://anonymous-feedback-ten.vercel.app/u/vikrant"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all w-fit"
                                >
                                    Give Feedback
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* SEO Keywords Cloud (Visually hidden or subtle) */}
                <div className="mt-12 opacity-0 h-0 overflow-hidden select-none">
                    avatar generator, avatar maker, avatar creator, placeholder avatar, free online avatar generator,
                    avatars online, avatares online, random avatar generator, random avatar, create an avatar free online,
                    jira avatar generator, online free avatar maker, free avatar maker online, generic avatar, simple avatars
                </div>
            </div>
        </footer>
    );
}
