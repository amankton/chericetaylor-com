"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ChevronRight, Menu } from "lucide-react";
import { useState } from "react";
import { getAllChapters } from "../../lib/militaryGuideData";
import Layout from "../../components/Layout";

export default function MFEGLayout({ children }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const chapters = getAllChapters();

    return (
        <Layout>
            <div className="min-h-screen pt-20 pb-12 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Mobile Sidebar Toggle */}
                        <div className="lg:hidden mb-4">
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-stone-200 text-stone-700 font-medium"
                            >
                                <Menu className="w-5 h-5" />
                                {isSidebarOpen ? "Hide Chapters" : "Show Chapters"}
                            </button>
                        </div>

                        {/* Sidebar Navigation */}
                        <aside
                            className={`
              lg:w-80 flex-shrink-0 
              ${isSidebarOpen ? "block" : "hidden"} 
              lg:block
            `}
                        >
                            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 sticky top-24 max-h-[calc(100vh-8rem)] flex flex-col">
                                <div className="mb-6">
                                    <Link
                                        href="/mfeg"
                                        className="flex items-center gap-2 text-stone-900 font-serif text-xl hover:text-stone-700 transition-colors"
                                    >
                                        <BookOpen className="w-6 h-6 text-stone-400" />
                                        <span>Military Guide</span>
                                    </Link>
                                    <p className="text-xs text-stone-500 mt-2 ml-8 uppercase tracking-wider font-semibold">Table of Contents</p>
                                </div>

                                <nav className="space-y-1 overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                                    {chapters.map((chapter) => {
                                        const isActive = pathname === `/mfeg/${chapter.id}`;
                                        return (
                                            <Link
                                                key={chapter.id}
                                                href={`/mfeg/${chapter.id}`}
                                                className={`
                        flex items-start gap-3 p-3 rounded-lg transition-all duration-200 group
                        ${isActive
                                                        ? "bg-stone-100 text-stone-900 shadow-sm"
                                                        : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                                                    }
                      `}
                                            >
                                                <span className={`
                        mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors
                        ${isActive ? "bg-stone-900" : "bg-stone-300 group-hover:bg-stone-400"}
                      `} />
                                                <span className="text-sm font-medium leading-relaxed">
                                                    {chapter.title}
                                                </span>
                                                {isActive && <ChevronRight className="w-4 h-4 ml-auto text-stone-400 self-center" />}
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content Area */}
                        <main className="flex-1 min-w-0">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
