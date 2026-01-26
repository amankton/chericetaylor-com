"use client";

import React from "react";
import Image from "next/image";
import { Layout } from "../../components/Layout";
import { GraduationCap, Briefcase, Mic, Users, Heart, BookOpen, Home } from "lucide-react";

export default function Page() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200 ring-1 ring-stone-200 shadow-xl">
              <Image
                src="/images/cherice-profile-new.jpg"
                alt="Cherice Taylor"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent"></div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/60 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                <span className="text-xs font-medium text-stone-600 uppercase tracking-widest">About Me</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight leading-tight">
                Cherice Taylor, M.A. Ed
              </h1>
              <p className="text-xl text-stone-600 font-light leading-relaxed">
                Educator • Podcast Host • Career Advisor • Mentor
              </p>
              <p className="text-stone-600 font-light leading-relaxed">
                With 36+ years in education and a passion for helping others grow, I&apos;m dedicated to sharing knowledge that makes a real difference in people&apos;s lives.
              </p>
              <div className="pt-4">
                <a href="/contact" className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-stone-900 text-stone-50 rounded-xl shadow-lg hover:bg-stone-800 transition-colors">
                  <span className="font-medium">Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-stone-50" />
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl text-stone-50 mb-4 leading-relaxed">
              &quot;If we all do better, then we all do better.&quot;
            </blockquote>
            <p className="text-stone-300 font-light">
              This belief drives everything I do—from my podcast to my work as a career advisor and education consultant. When we invest in each other&apos;s growth, we all rise together.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-3xl text-stone-900 mb-6">My Journey</h2>
            <div className="prose prose-stone prose-lg max-w-none">
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                Cherice Taylor, M.A. in Education Administration, is the creator and host of the <strong className="font-medium text-stone-900">Time Matters Podcast</strong>. The podcast is driven by her belief that &quot;if we all do better, then we all do better,&quot; and on it, she shares knowledge from her 36 years as an educator, education consultant, stay-at-home mom, and career advisor.
              </p>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                Throughout her career, Cherice has worn many hats—from classroom teacher to education administrator, from stay-at-home mom to career advisor. Each role has deepened her understanding of the challenges people face and the support they need to thrive.
              </p>
              <p className="text-stone-600 font-light leading-relaxed">
                Today, Cherice serves as a <strong className="font-medium text-stone-900">Contributing Writer</strong> for FXBG Neighbors Stafford Living and Neighbors of Courthouse magazines, and as a <strong className="font-medium text-stone-900">Part-Time Career Advisor</strong> at Germanna Community College. She is also a charter member of <strong className="font-medium text-stone-900">Alpha Kappa Alpha Sorority, Incorporated – Psi Psi Omega Chapter</strong>.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-stone-50" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-stone-300 rounded-full"></div>
                <div className="flex-1 pb-6">
                  <p className="font-medium text-stone-900 mb-1">Master of Arts in Education Administration</p>
                  <p className="text-stone-600 text-sm">California State University, Dominguez Hills</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-stone-300 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-stone-900 mb-1">Bachelor of Arts</p>
                  <p className="text-stone-600 text-sm">University of California, Los Angeles (UCLA)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Life */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-stone-900 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-stone-50" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900">Personal Life</h3>
            </div>
            <p className="text-stone-600 font-light leading-relaxed">
              Cherice is married to Eric, a retired Naval Lieutenant Commander, and together they have four sons. As a military spouse, she understands firsthand the unique challenges military families face—from frequent relocations to maintaining educational continuity for children.
            </p>
          </div>
        </div>
      </section>

      {/* Current Roles */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">What I Do Today</h2>
            <p className="text-stone-600 font-light max-w-2xl mx-auto">
              I&apos;m passionate about making a difference through multiple channels—each one an opportunity to support growth and learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-stone-50" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Podcast Host</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-4">
                Creator and host of the <strong className="font-medium text-stone-900">Time Matters Podcast</strong>, where I explore education, career development, and personal growth with honesty and heart.
              </p>
              <a href="/podcast-episodes" className="text-stone-900 font-medium text-sm hover:underline">
                Listen to the podcast →
              </a>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-stone-50" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Career Advisor</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-4">
                Part-time career advisor at <strong className="font-medium text-stone-900">Germanna Community College</strong>, helping students and professionals navigate their career paths with confidence.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-stone-50" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Contributing Writer</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-4">
                Regular contributor to <strong className="font-medium text-stone-900">FXBG Neighbors Stafford Living</strong> and <strong className="font-medium text-stone-900">Neighbors of Courthouse</strong> magazines.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-stone-50" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Community Leader</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-4">
                Charter member of <strong className="font-medium text-stone-900">Alpha Kappa Alpha Sorority, Incorporated – Psi Psi Omega Chapter</strong>, committed to service and sisterhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-50 mb-4">Let&apos;s Connect</h2>
          <p className="text-stone-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re interested in having me speak at your event, want to discuss career advising, or just want to say hello, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-stone-50 text-stone-900 rounded-xl shadow-lg hover:bg-white transition-colors font-medium">
              Get in Touch
            </a>
            <a href="/podcast-episodes" className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-stone-800 text-stone-50 rounded-xl hover:bg-stone-700 transition-colors font-medium">
              Listen to the Podcast
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

