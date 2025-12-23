"use client";

import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Play, Clock, Calendar, Video, Search, X } from "lucide-react";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

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

// Video Card Component
function VideoCard({ video, onPlay }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
            <div className="relative aspect-video bg-stone-200">
                <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                />
                <button
                    onClick={() => onPlay(video)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                >
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-6 h-6 text-stone-900 ml-1" fill="currentColor" />
                    </div>
                </button>
            </div>
            <div className="p-5">
                <h3 className="font-serif text-lg text-stone-900 mb-2 line-clamp-2 leading-snug">{video.title}</h3>
                <p className="text-sm text-stone-500 mb-4 line-clamp-2">{video.description}</p>
                <div className="flex items-center gap-4 text-xs text-stone-400">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {video.publishedAt?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function Page() {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const q = query(collection(db, "videos"));
                const querySnapshot = await getDocs(q);
                const fetchedVideos = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    publishedAt: doc.data().publishedAt ? doc.data().publishedAt.toDate() : new Date(),
                }));
                setVideos(fetchedVideos);
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            {/* Hero Section */}
            <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-gradient-to-b from-stone-100 to-stone-50">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/60 backdrop-blur-sm mb-6">
                        <Video className="w-4 h-4 text-stone-600" />
                        <span className="text-xs font-medium text-stone-600 uppercase tracking-widest">Video Library</span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight mb-4">
                        Watch & Learn
                    </h1>
                    <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto mb-8">
                        Explore our collection of educational videos, webinars, and interviews.
                    </p>
                </div>
            </header>

            {/* Video Player Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedVideo(null)}>
                    <div className="w-full max-w-4xl animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
                        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                            <YouTubeEmbed videoId={selectedVideo.youtubeId} title={selectedVideo.title} />
                            <div className="p-6">
                                <h2 className="font-serif text-2xl text-stone-900 mb-2">{selectedVideo.title}</h2>
                                <p className="text-stone-500">{selectedVideo.description}</p>
                                <button
                                    onClick={() => setSelectedVideo(null)}
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

            {/* Search */}
            <section className="max-w-6xl mx-auto px-6 py-8">
                <div className="relative w-full max-w-md mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                        type="text"
                        placeholder="Search videos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
                    />
                </div>
            </section>

            {/* Videos Grid */}
            <section className="max-w-6xl mx-auto px-6 pb-20">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin w-8 h-8 border-2 border-stone-300 border-t-stone-900 rounded-full mx-auto"></div>
                        <p className="text-stone-500 mt-4">Loading videos...</p>
                    </div>
                ) : filteredVideos.length === 0 ? (
                    <div className="text-center py-12">
                        <Video className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                        <h3 className="font-serif text-xl text-stone-900 mb-2">No videos found</h3>
                        <p className="text-stone-500">Try adjusting your search.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredVideos.map((video) => (
                            <VideoCard key={video.id} video={video} onPlay={setSelectedVideo} />
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    );
}
