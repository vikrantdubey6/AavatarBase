"use client";

import React, { useState, useEffect } from "react";
import { Copy, Download, RefreshCw, Github, ExternalLink, Check, Sparkles } from "lucide-react";
import { AVATAR_STYLES, BACKGROUND_COLORS, type AvatarStyle } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function AvatarGenerator() {
    const [style, setStyle] = useState<AvatarStyle>("adventurer");
    const [seed, setSeed] = useState("wassup");
    const [bgColor, setBgColor] = useState("");
    const [hasBackground, setHasBackground] = useState(true);
    const [copied, setCopied] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    const [fullUrl, setFullUrl] = useState("");

    const baseUrl = `/api/avatar/${style}?seed=${seed}${hasBackground && bgColor ? `&backgroundColor=${bgColor}` : ""
        }`;

    useEffect(() => {
        setFullUrl(`${window.location.origin}${baseUrl}`);
    }, [baseUrl]);

    const avatarUrl = baseUrl;

    const generateRandom = () => {
        setIsGenerating(true);
        const newSeed = Math.random().toString(36).substring(7);
        setSeed(newSeed);
        setTimeout(() => setIsGenerating(false), 500);
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(fullUrl || `${window.location.origin}${avatarUrl}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    const downloadAvatar = async () => {
        try {
            const response = await fetch(avatarUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `avatar-${seed}.svg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            console.error("Download failed", err);
        }
    };

    return (
        <div className="flex flex-col items-center p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
            <main className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Customization Panel */}
                <section id="styles" className="lg:col-span-4 space-y-6 glass-card p-6 rounded-3xl">
                    <div className="space-y-4">
                        <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Style Selection
                        </label>
                        <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                            {AVATAR_STYLES.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setStyle(s)}
                                    className={cn(
                                        "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left capitalize",
                                        style === s
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                                            : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    )}
                                >
                                    {s.replace(/-/g, " ")}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Seed Value
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={seed}
                                onChange={(e) => setSeed(e.target.value)}
                                className="flex-1 bg-secondary/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                                placeholder="Type anything..."
                            />
                            <button
                                onClick={generateRandom}
                                className="p-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all flex items-center justify-center"
                            >
                                <RefreshCw size={20} className={cn(isGenerating && "animate-spin")} />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                Background
                            </label>
                            <button
                                onClick={() => setHasBackground(!hasBackground)}
                                className={cn(
                                    "w-12 h-6 rounded-full transition-all duration-200 relative",
                                    hasBackground ? "bg-indigo-600" : "bg-secondary"
                                )}
                            >
                                <div
                                    className={cn(
                                        "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
                                        hasBackground ? "left-7" : "left-1"
                                    )}
                                />
                            </button>
                        </div>
                        {hasBackground && (
                            <div className="grid grid-cols-6 gap-2">
                                {BACKGROUND_COLORS.map((color) => (
                                    <button
                                        key={color.hex}
                                        onClick={() => setBgColor(color.hex)}
                                        className={cn(
                                            "w-full aspect-square rounded-lg border-2 transition-all",
                                            bgColor === color.hex ? "border-white scale-110" : "border-transparent"
                                        )}
                                        style={{ backgroundColor: `#${color.hex}` }}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Right: Preview Panel */}
                <section className="lg:col-span-8 flex flex-col space-y-6">
                    <div className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">
                        {/* Animated Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full -z-10" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${style}-${seed}-${bgColor}-${hasBackground}`}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative"
                            >
                                <div className="relative group">
                                    <img
                                        src={avatarUrl}
                                        alt="Generated Avatar"
                                        className={cn(
                                            "w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl rounded-2xl transition-all duration-300",
                                            isGenerating && "opacity-40 scale-95 blur-sm"
                                        )}
                                    />
                                    <AnimatePresence>
                                        {isGenerating && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <div className="relative">
                                                    <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
                                                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-400 animate-pulse" size={24} />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-12 flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={downloadAvatar}
                                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all shadow-xl hover:shadow-white/10"
                            >
                                <Download size={20} />
                                <span>Download SVG</span>
                            </button>
                            <button
                                onClick={copyToClipboard}
                                className={cn(
                                    "flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all shadow-xl",
                                    copied
                                        ? "bg-green-600 text-white"
                                        : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-500/20"
                                )}
                            >
                                {copied ? <Check size={20} /> : <Copy size={20} />}
                                <span>{copied ? "Copied Link!" : "Copy Permanent Link"}</span>
                            </button>
                        </div>
                    </div>

                    <div className="glass-card rounded-3xl p-6 space-y-4">
                        <h3 className="font-semibold flex items-center gap-2">
                            <ExternalLink size={18} className="text-indigo-400" />
                            Dynamic URL
                        </h3>
                        <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-indigo-300 break-all border border-white/5">
                            {fullUrl || avatarUrl}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            This link is persistent and can be used directly in your projects. Any changes to the
                            parameters above will update this URL in real-time.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
