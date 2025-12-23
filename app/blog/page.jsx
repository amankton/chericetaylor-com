"use client";

import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { BookOpen, Calendar, User, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function ArticleCard({ article }) {
    return (
        <Link href={`/blog/${article.slug}`} className="group bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 flex flex-col h-full">
            <div className="relative aspect-[16/9] bg-stone-200 overflow-hidden">
                {article.coverImage ? (
                    <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-300">
                        <BookOpen className="w-12 h-12" />
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.publishedAt?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    {article.author && (
                        <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" />
                            {article.author}
                        </span>
                    )}
                </div>
                <h3 className="font-serif text-xl text-stone-900 mb-3 group-hover:text-stone-700 transition-colors leading-tight">
                    {article.title}
                </h3>
                <p className="text-stone-500 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {article.excerpt || article.content?.substring(0, 150) + "..."}
                </p>
                <div className="flex items-center text-sm font-medium text-stone-900 group-hover:text-stone-600">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}

export default function Page() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const q = query(collection(db, "blogs"), orderBy("publishedAt", "desc"));
                const querySnapshot = await getDocs(q);
                const fetchedArticles = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    publishedAt: doc.data().publishedAt ? doc.data().publishedAt.toDate() : new Date(),
                }));
                setArticles(fetchedArticles);
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            {/* Hero Section */}
            <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-gradient-to-b from-stone-100 to-stone-50">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/60 backdrop-blur-sm mb-6">
                        <BookOpen className="w-4 h-4 text-stone-600" />
                        <span className="text-xs font-medium text-stone-600 uppercase tracking-widest">The Blog</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight mb-4">
                        Written Insights
                    </h1>
                    <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto mb-8">
                        Articles and reflections on education, family, and success.
                    </p>
                </div>
            </header>

            {/* Search */}
            <section className="max-w-6xl mx-auto px-6 py-8">
                <div className="relative w-full max-w-md mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
                    />
                </div>
            </section>

            {/* Articles Grid */}
            <section className="max-w-6xl mx-auto px-6 pb-20">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin w-8 h-8 border-2 border-stone-300 border-t-stone-900 rounded-full mx-auto"></div>
                        <p className="text-stone-500 mt-4">Loading articles...</p>
                    </div>
                ) : filteredArticles.length === 0 ? (
                    <div className="text-center py-12">
                        <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                        <h3 className="font-serif text-xl text-stone-900 mb-2">No articles found</h3>
                        <p className="text-stone-500">Check back soon for new content.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    );
}
