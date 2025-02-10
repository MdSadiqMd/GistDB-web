"use client";

import { motion } from "motion/react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Btn03 from "@/components/btn-03";
import { ElegantShape } from "@/components/elegant-shape";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
});

export default function HeroGeometric({
    badge,
    title1 = "Transform GitHub Gists Into Your Next Database using",
    title2 = "Gist DB",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] pt-20">
            <nav className="fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Image src="https://github.com/user-attachments/assets/e15252b4-4665-478c-94c2-0f0daf6636b0" alt="Logo" width={50} height={50} className="opacity-90" />
                            {/* <span className="text-white font-semibold text-xl">GistDB</span> */}
                        </div>
                        <div className="flex items-center gap-4">
                            <Button
                                variant="default"
                                size="sm"
                                className={cn(
                                    "relative overflow-hidden group",
                                    "bg-white/5 hover:bg-white/10",
                                    "border border-white/20 hover:border-white/40",
                                    "transition-all duration-300 ease-out",
                                    "text-white hover:text-white/90",
                                    "shadow-[0_0_12px_-2px_rgba(255,255,255,0.3)] hover:shadow-[0_0_16px_-2px_rgba(255,255,255,0.5)]"
                                )}
                                asChild
                            >
                                <Link
                                    href="https://github.com/MdSadiqMd/GistDB"
                                    className="flex items-center gap-2"
                                    aria-label="Star us on GitHub"
                                    target="_blank"
                                >
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative flex items-center gap-2"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="hidden sm:inline">Star us</span>
                                        {/* <span className="h-[18px] px-2 ml-1 text-sm font-medium rounded-full bg-white/10">
                                            2.1k
                                        </span> */}
                                        <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity bg-gradient-to-r from-indigo-400/30 to-rose-400/30" />
                                    </motion.span>
                                </Link>
                            </Button>
                            <Button
                                size="sm"
                                className={cn("relative overflow-hidden group",
                                    "bg-white/5 hover:bg-white/10",
                                    "border border-white/20 hover:border-white/40",
                                    "transition-all duration-300 ease-out",
                                    "text-white hover:text-white/90",
                                    "shadow-[0_0_12px_-2px_rgba(255,255,255,0.3)] hover:shadow-[0_0_16px_-2px_rgba(255,255,255,0.5)]"
                                )}
                                asChild>
                                <Link
                                    href="https://x.com/Md_Sadiq_Md"
                                    target="_blank"
                                >
                                    <Twitter className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button
                                size="sm"
                                className={cn("relative overflow-hidden group",
                                    "bg-white/5 hover:bg-white/10",
                                    "border border-white/20 hover:border-white/40",
                                    "transition-all duration-300 ease-out",
                                    "text-white hover:text-white/90",
                                    "shadow-[0_0_12px_-2px_rgba(255,255,255,0.3)] hover:shadow-[0_0_16px_-2px_rgba(255,255,255,0.5)]"
                                )}
                                asChild>
                                <Link
                                    href="https://www.linkedin.com/in/sadiq-mohammad-2b256b227/"
                                    target="_blank"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-12">
                <div className="max-w-4xl mx-auto text-center">
                    {/* <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] mb-12 md:mb-16 shadow-lg backdrop-blur-sm"
                    >
                        <Image
                            src="https://kokonutui.com/logo.svg"
                            alt="Kokonut UI"
                            width={24}
                            height={24}
                            className="opacity-90"
                        />
                        <span className="text-sm font-medium text-white/70 tracking-wide">{badge}</span>
                    </motion.div> */}

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4 md:space-y-6 lg:space-y-8"
                    >
                        <h1 className="font-bold tracking-tight pb-4 md:pb-8">
                            <span className="h-[9rem] sm:h-[10rem] md:h-[17rem] lg:h-[11rem] block text-4xl sm:text-5xl md:text-6xl xl:text-6xl mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 leading-tight md:leading-normal">
                                {title1}
                            </span>
                            <span
                                className={cn(
                                    "h-[6rem] sm:h-[6rem] md:h-[8rem] lg:h-[9rem] block text-5xl sm:text-6xl md:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                                    "leading-tight md:leading-normal",
                                    pacifico.className,
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-0 md:mt-0"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-xl mx-auto px-2 sm:px-0">
                            Rust-powered database that uses GitHub Gists as storage. Simple, reliable, and secure.
                        </p>
                        <div className="flex flex-row sm:flex-row items-center justify-center gap-4 mt-6 md:mt-8">
                            <Link
                                href={"https://github.com/MdSadiqMd/GistDB"}
                                target="_self"
                            >
                                <Btn03
                                    text="Get Started"
                                    className="w-auto sm:w-auto h-[50px] text-lg sm:text-xl"
                                />
                            </Link>
                            <Button className="w-auto sm:w-auto">
                                <Image
                                    src={"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"}
                                    alt="Buy me a coffee"
                                    width={170}
                                    height={60}
                                    className="w-full h-auto max-w-[180px]"
                                />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}