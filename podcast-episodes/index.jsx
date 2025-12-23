import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { Play, Clock, Calendar, Mic, Search, Filter, Download, Share2, Headphones } from "lucide-react";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const episodes = [
    {
      id: 1,
      number: 45,
      title: "Teaching Matters: Building Better Classrooms",
      description: "Insights on creating classroom environments where every student can thrive. We discuss classroom management, student engagement, and the power of building strong relationships with students.",
      duration: "45 min",
      date: "Dec 1, 2024",
      category: "Education",
      featured: true
    },
    {
      id: 2,
      number: 44,
      title: "Career Clarity: Finding Your Path",
      description: "Navigate your career path with advice grounded in experience. From career transitions to professional development, we cover the strategies that lead to fulfilling work.",
      duration: "32 min",
      date: "Nov 24, 2024",
      category: "Career",
      featured: false
    },
    {
      id: 3,
      number: 43,
      title: "Work-Life Balance in Education",
      description: "Finding balance in a demanding world. Practical strategies for educators to maintain their well-being while giving their best to students.",
      duration: "50 min",
      date: "Nov 17, 2024",
      category: "Personal Growth",
      featured: false
    },
    {
      id: 4,
      number: 42,
      title: "Mentoring the Next Generation",
      description: "Guidance for young professionals starting out. How to be an effective mentor and the impact mentorship has on career development.",
      duration: "38 min",
      date: "Nov 10, 2024",
      category: "Career",
      featured: false
    },
    {
      id: 5,
      number: 41,
      title: "Supporting Military Families in Education",
      description: "The unique challenges military families face in education and how schools can better support these students through transitions.",
      duration: "42 min",
      date: "Nov 3, 2024",
      category: "Military Families",
      featured: false
    },
    {
      id: 6,
      number: 40,
      title: "Parent-Teacher Partnerships",
      description: "Building strong partnerships between parents and teachers for student success. Communication strategies that work.",
      duration: "35 min",
      date: "Oct 27, 2024",
      category: "Education",
      featured: false
    },
    {
      id: 7,
      number: 39,
      title: "Career Transitions After 40",
      description: "It's never too late to make a change. Stories and strategies for successful career transitions in mid-life.",
      duration: "48 min",
      date: "Oct 20, 2024",
      category: "Career",
      featured: false
    },
    {
      id: 8,
      number: 38,
      title: "The Power of Lifelong Learning",
      description: "Why continuous learning matters and how to cultivate a growth mindset at any age.",
      duration: "40 min",
      date: "Oct 13, 2024",
      category: "Personal Growth",
      featured: false
    },
  ];

  const categories = ["All", "Education", "Career", "Personal Growth", "Military Families"];

  const filteredEpisodes = episodes.filter(episode => {
    const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || episode.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredEpisode = episodes.find(ep => ep.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/60 backdrop-blur-sm mb-8">
            <Mic className="w-4 h-4 text-stone-600" />
            <span className="text-xs font-medium text-stone-600 uppercase tracking-widest">Time Matters Podcast</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-stone-900 tracking-tight leading-tight mb-6">
            Conversations That Matter
          </h1>

          <p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Weekly episodes exploring education, career development, and personal growth. Real talk for real challenges.
          </p>

          {/* Subscribe Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
              Spotify
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zM8.182 7.09v9.818h2.182V7.091H8.182zm5.454 0v9.818h2.182V7.091h-2.182z" /></svg>
              Apple Podcasts
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              YouTube
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-serif text-stone-900">100+</p>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Episodes</p>
            </div>
            <div className="w-px h-12 bg-stone-200"></div>
            <div>
              <p className="text-3xl font-serif text-stone-900">36</p>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="w-px h-12 bg-stone-200"></div>
            <div>
              <p className="text-3xl font-serif text-stone-900">Weekly</p>
              <p className="text-xs text-stone-500 uppercase tracking-wide">New Episodes</p>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Episode */}
      {featuredEpisode && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="px-3 py-1 bg-stone-700 rounded-full">
                <span className="text-xs font-medium uppercase tracking-wide">Featured Episode</span>
              </div>
            </div>
            <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4 text-stone-300 text-sm">
                  <span className="font-medium">Episode {featuredEpisode.number}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredEpisode.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredEpisode.date}
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">{featuredEpisode.title}</h2>
                <p className="text-stone-300 font-light leading-relaxed mb-6">
                  {featuredEpisode.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-3 px-6 py-3 bg-stone-50 text-stone-900 rounded-xl shadow-lg hover:bg-white transition-colors font-medium">
                    <Play className="w-5 h-5" />
                    Listen Now
                  </button>
                  <button className="inline-flex items-center gap-3 px-6 py-3 bg-stone-800 text-stone-50 rounded-xl hover:bg-stone-700 transition-colors font-medium border border-stone-700">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className="w-48 h-48 bg-stone-700 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Headphones className="w-24 h-24 text-stone-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              placeholder="Search episodes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-stone-300 transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                  ? 'bg-stone-900 text-stone-50 shadow-md'
                  : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-stone-500 text-sm mb-6">
          Showing {filteredEpisodes.length} {filteredEpisodes.length === 1 ? 'episode' : 'episodes'}
        </p>

        {/* Episode List */}
        <div className="space-y-6">
          {filteredEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Play Button */}
                <div className="shrink-0">
                  <button className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Play className="w-7 h-7 text-stone-50 ml-1" />
                  </button>
                </div>

                {/* Episode Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full">
                      Episode {episode.number}
                    </span>
                    <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full">
                      {episode.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
                    {episode.title}
                  </h3>

                  <p className="text-stone-600 font-light mb-4 leading-relaxed">
                    {episode.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {episode.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {episode.date}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex md:flex-col gap-2 shrink-0">
                  <button className="flex-1 md:flex-none px-4 py-2 bg-stone-900 text-stone-50 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors">
                    Listen
                  </button>
                  <button className="px-4 py-2 border border-stone-200 text-stone-600 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-stone-200 text-stone-600 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredEpisodes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-stone-400" />
            </div>
            <h3 className="font-serif text-2xl text-stone-900 mb-2">No episodes found</h3>
            <p className="text-stone-600 font-light">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-stone-900 py-24 px-6 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mic className="w-8 h-8 text-stone-50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-50 mb-4">Never Miss an Episode</h2>
          <p className="text-stone-300 font-light mb-10 leading-relaxed">
            Subscribe to get notified when new episodes drop, plus exclusive content and behind-the-scenes insights.
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
