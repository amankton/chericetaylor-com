import React from "react";
import { Layout } from "../../components/Layout";
import { ArrowRight, Play, BookOpen, Users, Mic, GraduationCap, Briefcase, Heart } from "lucide-react";

export default function Page() {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/40 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
            <span className="text-xs font-medium text-stone-600 uppercase tracking-widest">Education & Growth</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 tracking-tight leading-[1.1] mb-6 animate-fade-in-up delay-100">
            Cherice <span className="text-stone-300 font-light italic text-4xl md:text-6xl align-middle px-2"></span>
            Taylor
          </h1>

          <p className="text-lg md:text-xl text-stone-600 font-light max-w-lg mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
            Insights on building better classrooms, navigating career paths, and finding balance in a demanding world.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
            <a href="/podcast-episodes" className="flex items-center gap-3 px-6 py-4 bg-stone-900 text-stone-50 rounded-xl shadow-lg hover:bg-stone-800 transition-colors">
              <Mic className="w-5 h-5" />
              <span className="font-medium">Listen to Podcast</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/about-cherice" className="flex items-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-sm border border-stone-100 rounded-xl shadow-sm hover:border-stone-200 transition-colors">
              <span className="font-medium text-stone-800">About Me</span>
            </a>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 mix-blend-multiply">
        </div>
      </header>

      {/* Featured Content */}
      <section className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 group ring-1 ring-stone-200">
          {/* Placeholder for Cherice's Image */}
          <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">
            <span className="text-sm font-medium tracking-wide">Cherice's Photo</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent"></div>
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-stone-100 mb-2">
            <GraduationCap className="w-4 h-4 text-stone-600" />
            <span className="text-xs font-medium text-stone-600 uppercase tracking-wide">About Cherice</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight">Three decades of experience,<br />shared with you.</h2>
          <p className="text-stone-600 font-light leading-relaxed">
            From the classroom to leadership, I've seen education from every angle. Now, I'm sharing the lessons that matter most for educators, parents, and lifelong learners.
          </p>
          <p className="text-stone-600 font-light leading-relaxed">
            <strong className="font-medium text-stone-900">"If we all do better, then we all do better."</strong> This belief drives everything I do—from my podcast to my work as a career advisor and education consultant.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="pl-4 border-l-2 border-stone-300">
              <p className="text-3xl font-serif text-stone-900">36</p>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Years in Education</p>
            </div>
            <div className="pl-4 border-l-2 border-stone-300">
              <p className="text-3xl font-serif text-stone-900">100+</p>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Podcast Episodes</p>
            </div>
            <div className="pl-4 border-l-2 border-stone-300">
              <p className="text-3xl font-serif text-stone-900">∞</p>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Stories to Share</p>
            </div>
          </div>
          <div className="pt-4">
            <a href="/about-cherice" className="inline-flex items-center gap-2 text-stone-900 font-medium hover:gap-3 transition-all">
              Learn more about my journey
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">What I Offer</h2>
            <p className="text-stone-600 font-light max-w-2xl mx-auto">
              Whether you're an educator, parent, or professional seeking growth, I'm here to support your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Podcast */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-stone-50" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Time Matters Podcast</h3>
              <p className="text-stone-600 font-light mb-6 leading-relaxed">
                Weekly conversations on education, career development, and personal growth. Real talk for real challenges.
              </p>
              <a href="/podcast-episodes" className="inline-flex items-center gap-2 text-stone-900 font-medium text-sm hover:gap-3 transition-all">
                Browse Episodes
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Career Advising */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-stone-50" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Career Advising</h3>
              <p className="text-stone-600 font-light mb-6 leading-relaxed">
                One-on-one guidance for educators and professionals navigating career transitions and growth opportunities.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 text-stone-900 font-medium text-sm hover:gap-3 transition-all">
                Schedule a Session
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Writing & Resources */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-stone-50" />
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-3">Articles & Resources</h3>
              <p className="text-stone-600 font-light mb-6 leading-relaxed">
                Practical advice for parents and educators, featured in FXBG Neighbors and Stafford Living magazines.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 text-stone-900 font-medium text-sm hover:gap-3 transition-all">
                Read Articles
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episodes */}
      <section className="max-w-5xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-stone-100 mb-4">
            <Play className="w-4 h-4 text-stone-600" />
            <span className="text-xs font-medium text-stone-600 uppercase tracking-wide">Latest Episodes</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Fresh Conversations</h2>
          <p className="text-stone-600 font-light max-w-2xl mx-auto">
            Tune in for honest discussions on education, career, and life's challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Episode 1 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 text-stone-50 ml-0.5" />
            </div>
            <div className="mb-4">
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Episode 45 • 45 min</span>
            </div>
            <h3 className="text-xl font-serif text-stone-900 mb-3">Teaching Matters</h3>
            <p className="text-stone-600 font-light text-sm mb-6 leading-relaxed">
              Insights on building better classrooms and creating environments where every student can thrive.
            </p>
            <a href="/podcast-episodes" className="inline-flex items-center gap-2 text-stone-900 font-medium text-sm hover:gap-3 transition-all">
              Listen Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Episode 2 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 text-stone-50 ml-0.5" />
            </div>
            <div className="mb-4">
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Episode 44 • 32 min</span>
            </div>
            <h3 className="text-xl font-serif text-stone-900 mb-3">Career Clarity</h3>
            <p className="text-stone-600 font-light text-sm mb-6 leading-relaxed">
              Navigate your career path with advice grounded in experience and honest reflection.
            </p>
            <a href="/podcast-episodes" className="inline-flex items-center gap-2 text-stone-900 font-medium text-sm hover:gap-3 transition-all">
              Listen Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Episode 3 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 text-stone-50 ml-0.5" />
            </div>
            <div className="mb-4">
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Episode 43 • 50 min</span>
            </div>
            <h3 className="text-xl font-serif text-stone-900 mb-3">Work & Life Balance</h3>
            <p className="text-stone-600 font-light text-sm mb-6 leading-relaxed">
              Finding balance in a demanding world and making time for what truly matters.
            </p>
            <a href="/podcast-episodes" className="inline-flex items-center gap-2 text-stone-900 font-medium text-sm hover:gap-3 transition-all">
              Listen Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="text-center">
          <a href="/podcast-episodes" className="inline-flex items-center gap-3 px-6 py-3 bg-stone-900 text-stone-50 rounded-xl shadow-lg hover:bg-stone-800 transition-colors">
            <span className="font-medium">View All Episodes</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-stone-900 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-50 mb-4">Stay Connected</h2>
          <p className="text-stone-300 font-light mb-10 leading-relaxed">
            Get weekly insights on education, career growth, and personal development delivered to your inbox. Plus, be the first to know about new podcast episodes.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-stone-50 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-stone-50 text-stone-900 font-medium rounded-lg hover:bg-white transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </form>
          <p className="text-stone-400 text-xs mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

    </Layout>
  );
}
