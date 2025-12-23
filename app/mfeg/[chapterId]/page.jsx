"use client";

import { useParams, notFound } from "next/navigation";
import { getChapterById } from "../../../lib/militaryGuideData";
import { ArrowLeft, ArrowRight, Printer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
// import { motion } from "framer-motion"; // Optional: Add animations if desired, for now keeping it simple and performant

export default function ChapterPage() {
  const params = useParams();
  const chapter = getChapterById(params.chapterId);

  if (!chapter) {
    notFound();
  }

  // Handle PDF Export
  const handlePrint = () => {
    window.print();
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.chapterId]);

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          aside, nav, button, .no-print {
            display: none !important;
          }
          main {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
        }
        
        /* Typography for content */
        .chapter-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.875rem;
          line-height: 2.25rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #1c1917; /* stone-900 */
        }
        
        .chapter-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          line-height: 2rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #44403c; /* stone-700 */
        }
        
        .chapter-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #44403c; /* stone-700 */
        }
        
        .chapter-content ul, .chapter-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          list-style-type: disc;
          color: #44403c; /* stone-700 */
        }
        
        .chapter-content li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
        }
        
        .chapter-content strong {
          font-weight: 600;
          color: #1c1917; /* stone-900 */
        }
      `}</style>

      {/* Chapter Header */}
      <div className="mb-12 border-b border-stone-200 pb-8">
        <div className="flex items-center gap-2 text-sm text-stone-500 mb-6">
          <Link href="/mfeg" className="hover:text-stone-900 transition-colors">
            Guide
          </Link>
          <span>/</span>
          <span className="text-stone-900 font-medium truncate">{chapter.title}</span>
        </div>

        {chapter.image && (
          <div className="mb-8 w-full rounded-2xl overflow-hidden shadow-md">
            <Image
              src={chapter.image}
              alt={chapter.title}
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight flex-1">
            {chapter.title}
          </h1>

          <button
            onClick={handlePrint}
            className="no-print inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium hover:bg-stone-200 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Chapter</span>
          </button>
        </div>
      </div>

      {/* Chapter Content */}
      <article
        className="chapter-content prose prose-stone max-w-none prose-lg prose-headings:font-serif prose-headings:text-stone-900 prose-p:text-stone-700 prose-a:text-stone-900 hover:prose-a:text-stone-600 prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: chapter.content }}
      />

      {/* Navigation Footer */}
      {/* Note: We would need next/prev logic here, but for now we'll just link back to index 
          or manually compute next/prev if we want to add that logic later. 
          Given urgency, simple back to guide is good, or a simple implementation.
      */}
      <div className="mt-16 pt-8 border-t border-stone-200 no-print">
        <div className="flex justify-between items-center">
          <Link
            href="/mfeg"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guide
          </Link>

          {/* Conceptual Next Button - logic would go here */}
          {/* 
          <Link 
            href="/mfeg/next-chapter-id"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
          >
            Next Copmter
            <ArrowRight className="w-4 h-4" />
          </Link>
          */}
        </div>
      </div>
    </div>
  );
}
