"use client";

import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Play, Clock, Calendar, Mic, Search, Headphones, Video, Music, ExternalLink, X } from "lucide-react";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, orderBy, doc, updateDoc, arrayUnion } from "firebase/firestore";


// YouTube Embed Component
function YouTubeEmbed({ videoId, title }) {
  if (!videoId) return null;
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-900">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

// Episode Card Component
function EpisodeCard({ episode, onPlay }) {
  const isVideo = episode.mediaType === "video";
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
      {isVideo && episode.youtubeVideoId && (
        <div className="relative aspect-video bg-stone-200">
          <img
            src={`https://img.youtube.com/vi/${episode.youtubeVideoId}/mqdefault.jpg`}
            alt={episode.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => onPlay(episode)}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
          >
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Play className="w-6 h-6 text-stone-900 ml-1" fill="currentColor" />
            </div>
          </button>
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
              <Video className="w-3 h-3" />
              Video
            </span>
          </div>
        </div>
      )}
      {!isVideo && (
        <div className="relative aspect-video bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center">
          <Headphones className="w-16 h-16 text-stone-400" />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
              <Music className="w-3 h-3" />
              Audio
            </span>
          </div>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs font-medium text-stone-500">EP {episode.episodeNumber}</span>
          <span className="w-1 h-1 rounded-full bg-stone-300"></span>
          <span className="w-1 h-1 rounded-full bg-stone-300"></span>
          <span className="text-xs text-stone-500 capitalize">
            {episode.tags && episode.tags.length > 0 ? episode.tags.join(", ") : episode.category}
          </span>
          {episode.featured && (
            <>
              <span className="w-1 h-1 rounded-full bg-stone-300"></span>
              <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Featured</span>
            </>
          )}
        </div>
        <h3 className="font-serif text-lg text-stone-900 mb-2 line-clamp-2 leading-snug">{episode.title}</h3>
        {episode.guestName && (
          <p className="text-sm text-stone-600 mb-2 font-medium">with {episode.guestName}</p>
        )}
        <p className="text-sm text-stone-500 mb-4 line-clamp-2">{episode.description}</p>
        <div className="flex items-center gap-4 text-xs text-stone-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {episode.duration}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {episode.publishDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const q = query(collection(db, "podcasts"), orderBy("episodeNumber", "desc"));
        const querySnapshot = await getDocs(q);

        const episodesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          // Convert Timestamp to Date if necessary
          publishDate: doc.data().publishedAt ? doc.data().publishedAt.toDate() : new Date(),
        }));

        setEpisodes(episodesData);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEpisodes();
  }, []);

  const categories = ["All", "Education", "Career", "Personal Growth", "Military Families"];

  const filteredEpisodes = episodes.filter(episode => {
    const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (episode.guestName && episode.guestName.toLowerCase().includes(searchTerm.toLowerCase()));
    (episode.guestName && episode.guestName.toLowerCase().includes(searchTerm.toLowerCase()));

    // Filter by tags (if present) or category
    const matchesCategory = selectedCategory === "All" ||
      (episode.tags && episode.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase())) ||
      episode.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredEpisode = episodes.find(ep => ep.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/60 backdrop-blur-sm mb-6">
            <Mic className="w-4 h-4 text-stone-600" />
            <span className="text-xs font-medium text-stone-600 uppercase tracking-widest">Time Matters Podcast</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight mb-4">
            Pearls of Wisdom
          </h1>
          <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto mb-8">
            Conversations that matter. Watch video episodes or listen to audio podcasts featuring insights on education, career, and personal growth.
          </p>
          {/* Subscribe Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="https://anchor.fm/cherice-taylor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-stone-200 text-sm font-medium text-stone-700 hover:border-stone-300 hover:shadow-sm transition-all">
              <span>Anchor</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-stone-200 text-sm font-medium text-stone-700 hover:border-stone-300 hover:shadow-sm transition-all">
              <span>Spotify</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.youtube.com/@timematterspodcast" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-stone-200 text-sm font-medium text-stone-700 hover:border-stone-300 hover:shadow-sm transition-all">
              <span>YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Video Player Modal */}
      {selectedEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedEpisode(null)}>
          <div className="w-full max-w-4xl animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId={selectedEpisode.youtubeVideoId} title={selectedEpisode.title} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-stone-500">EP {selectedEpisode.episodeNumber}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                  <span className="text-xs text-stone-500">{selectedEpisode.category}</span>
                </div>
                <h2 className="font-serif text-2xl text-stone-900 mb-2">{selectedEpisode.title}</h2>
                {selectedEpisode.guestName && (
                  <p className="text-stone-600 mb-3 font-medium">with {selectedEpisode.guestName}</p>
                )}
                <p className="text-stone-500">{selectedEpisode.description}</p>
                <button
                  onClick={() => setSelectedEpisode(null)}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              placeholder="Search episodes, guests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {/* Hidden admin trigger */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                  ? "bg-stone-900 text-white shadow-md"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <p className="text-stone-500 text-sm mt-4">
          Showing {filteredEpisodes.length} {filteredEpisodes.length === 1 ? 'episode' : 'episodes'}
        </p>
      </section>

      {/* Episodes Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-2 border-stone-300 border-t-stone-900 rounded-full mx-auto"></div>
            <p className="text-stone-500 mt-4">Loading episodes...</p>
          </div>
        ) : filteredEpisodes.length === 0 ? (
          <div className="text-center py-12">
            <Mic className="w-12 h-12 text-stone-300 mx-auto mb-4" />
            <h3 className="font-serif text-xl text-stone-900 mb-2">No episodes found</h3>
            <p className="text-stone-500">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} onPlay={setSelectedEpisode} />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-stone-900 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mic className="w-7 h-7 text-stone-50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-50 mb-4">Never Miss an Episode</h2>
          <p className="text-stone-300 font-light mb-8 leading-relaxed">Subscribe to get notified when new episodes drop.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-stone-50 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all" />
            <button type="submit" className="px-6 py-3 bg-stone-50 text-stone-900 font-medium rounded-lg hover:bg-white transition-colors shadow-lg">Subscribe</button>
          </form>
          <p className="text-stone-400 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </Layout>
  );
}

