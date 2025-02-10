"use client";

import { motion } from "motion/react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin } from "lucide-react";
import Btn15 from "@/components/btn-15";
import { Button } from "@/components/ui/button";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
});

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r from-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export default function HeroGeometric({
    badge = "Kokonut UI",
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
                            <Image src="https://kokonutui.com/logo.svg" alt="Logo" width={32} height={32} className="opacity-90" />
                            <span className="text-white font-semibold text-xl">GistDB</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white" asChild>
                                <a href="https://github.com/yourusername/gistdb" className="flex items-center gap-2">
                                    <Github className="w-5 h-5" />
                                    <span>Star us</span>
                                </a>
                            </Button>
                            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white" asChild>
                                <a href="https://twitter.com/yourusername">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white" asChild>
                                <a href="https://linkedin.com/in/yourusername">
                                    <Linkedin className="w-5 h-5" />
                                </a>
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

            <div className="relative z-10 container mx-auto px-6 md:px-8 py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
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
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6 md:space-y-8"
                    >
                        <h1 className="font-bold tracking-tight pb-4">
                            <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 leading-tight">
                                {title1}
                            </span>
                            <span
                                className={cn(
                                    "block text-5xl sm:text-6xl md:text-7xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 leading-tight",
                                    pacifico.className,
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-12">
                        <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-2xl mx-auto">
                            Crafting exceptional digital experiences through innovative design and cutting-edge technology.
                        </p>
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <Btn15 label="Explore" />
                            <Btn15 label="Buy me a coffee" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}
