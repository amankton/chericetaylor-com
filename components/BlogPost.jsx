"use client";

import React, { useState, useEffect } from "react";
import { Layout } from "./Layout";
import { format } from "date-fns";
import { db } from "../lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function BlogPost({ slug }) {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const q = query(collection(db, "blogs"), where("slug", "==", slug));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0];
                    setArticle({
                        id: doc.id,
                        ...doc.data(),
                        publishedAt: doc.data().publishedAt ? doc.data().publishedAt.toDate() : new Date(),
                    });
                } else {
                    setArticle(null);
                }
            } catch (error) {
                console.error("Error fetching article:", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchArticle();
        }
    }, [slug]);

    if (loading) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin w-8 h-8 border-2 border-stone-300 border-t-stone-900 rounded-full"></div>
                </div>
            </Layout>
        );
    }

    if (!article) {
        return (
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-serif text-stone-900 mb-4">Article Not Found</h1>
                    <Link href="/blog" className="text-stone-600 hover:text-stone-900 underline">Back to Blog</Link>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <article className="min-h-screen pb-20 pt-32 md:pt-40">
                <div className="max-w-3xl mx-auto px-6">
                    <Link href="/blog" className="inline-flex items-center text-sm text-stone-500 hover:text-stone-900 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Back to Articles
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center gap-4 text-sm text-stone-500 mb-6">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {article.publishedAt && format(article.publishedAt, "MMMM, d, yyyy")}
                            </span>
                            {article.author && (
                                <span className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    {article.author}
                                </span>
                            )}
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl text-stone-900 leading-tight mb-8">
                            {article.title}
                        </h1>
                        {article.coverImage && (
                            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-8 bg-stone-100">
                                <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
                            </div>
                        )}
                    </header>

                    <div className="prose prose-stone prose-lg max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                </div>
            </article>
        </Layout>
    );
}
