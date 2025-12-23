"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Star, Heart, Users, MapPin } from "lucide-react";
import { getAllChapters } from "../../lib/militaryGuideData";

export default function MFEGPage() {
    const chapters = getAllChapters();

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-3xl bg-stone-900 text-white p-8 md:p-16 lg:p-24">
                {/* Abstract background pattern */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-stone-800 rounded-full opacity-50 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-stone-800 rounded-full opacity-50 blur-3xl"></div>

                <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium uppercase tracking-wider mb-6">
                        <BookOpen className="w-3 h-3" />
                        <span>Official Resource</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                        Military Family Education Guide
                    </h1>
                    <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mb-10">
                        A comprehensive roadmap for navigating your child's educational journey amidst the unique challenges and opportunities of military life.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/mfeg/introduction"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 rounded-full font-medium hover:bg-stone-100 transition-colors"
                        >
                            Start Reading
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="#chapters"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                        >
                            View Chapters
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="p-6 rounded-2xl bg-white border border-stone-100 shadow-sm">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                        <MapPin className="w-6 h-6 text-stone-700" />
                    </div>
                    <h3 className="font-serif text-xl mb-2 text-stone-900">Seamless Transitions</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Expert strategies for managing school moves, transferring records, and maintaining academic continuity across states.
                    </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-stone-100 shadow-sm">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                        <Heart className="w-6 h-6 text-stone-700" />
                    </div>
                    <h3 className="font-serif text-xl mb-2 text-stone-900">Emotional Resilience</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Supporting your child's social-emotional well-being during deployments, separations, and new beginnings.
                    </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-stone-100 shadow-sm">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
                        <Users className="w-6 h-6 text-stone-700" />
                    </div>
                    <h3 className="font-serif text-xl mb-2 text-stone-900">Community Support</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Building effective partnerships with schools and leveraging military-specific educational resources.
                    </p>
                </div>
            </section>

            {/* Chapters List */}
            <section id="chapters" className="scroll-mt-24">
                <h2 className="font-serif text-3xl text-stone-900 mb-8">Table of Contents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {chapters.map((chapter, index) => (
                        <Link
                            key={chapter.id}
                            href={`/mfeg/${chapter.id}`}
                            className="group block bg-white rounded-2xl border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                            {chapter.image && (
                                <div className="w-full overflow-hidden bg-stone-100">
                                    <Image
                                        src={chapter.image}
                                        alt={chapter.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    {chapter.title.split(':')[0]}
                                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <h3 className="font-serif text-xl text-stone-900 mb-3 group-hover:text-stone-700">
                                    {chapter.title.split(':').length > 1 ? chapter.title.split(':').slice(1).join(':').trim() : chapter.title}
                                </h3>
                            </div>
                            {/* If we had descriptions in the data, we'd render them here. 
                  Since we extracted raw chapters, we might not have descriptions easily available 
                  unless we parse them from the content or add them manually. 
                  For now, we'll skip descriptions or extract the first few words if needed. 
              */}
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
