"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Save, X, Video, Music, Eye, EyeOff, Star, ArrowLeft, Youtube } from "lucide-react";
import Link from "next/link";

// Episode form initial state
const emptyEpisode = {
  episodeNumber: "",
  title: "",
  description: "",
  mediaType: "video",
  youtubeVideoId: "",
  youtubeUrl: "",
  audioUrl: "",
  thumbnailUrl: "",
  duration: "",
  category: "Education",
  guestName: "",
  guestTitle: "",
  featured: false,
  published: true,
  publishDate: new Date().toISOString().split('T')[0],
};

// Sample episodes - will be replaced with Firebase data
const sampleEpisodes = [
  { id: "1", episodeNumber: 1, title: "What is the Common Application?", description: "Understanding the Common Application process for college admissions.", mediaType: "video", youtubeVideoId: "dQw4w9WgXcQ", duration: "15 min", publishDate: "2024-01-15", category: "Education", guestName: "", featured: true, published: true },
  { id: "2", episodeNumber: 2, title: "Early Childhood and Social Emotional Awareness", description: "Expert Dana Kaplan shares pearls of wisdom about early childhood development.", mediaType: "video", youtubeVideoId: "dQw4w9WgXcQ", duration: "32 min", publishDate: "2024-02-01", category: "Education", guestName: "Dana Kaplan", featured: false, published: true },
];

const categories = ["Education", "Career", "Personal Growth", "Military Families", "Parenting"];

export default function AdminPodcastPage() {
  const [episodes, setEpisodes] = useState(sampleEpisodes);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(emptyEpisode);
  const [loading, setLoading] = useState(false);

  // Extract YouTube ID from URL
  const extractYouTubeId = (url) => {
    if (!url) return "";
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return url;
  };

  // Handle YouTube URL change
  const handleYouTubeUrlChange = (url) => {
    const videoId = extractYouTubeId(url);
    setCurrentEpisode({ ...currentEpisode, youtubeUrl: url, youtubeVideoId: videoId });
  };

  // Save episode
  const handleSave = async () => {
    setLoading(true);
    try {
      if (currentEpisode.id) {
        // Update existing
        setEpisodes(episodes.map(ep => ep.id === currentEpisode.id ? currentEpisode : ep));
      } else {
        // Create new
        const newId = String(Math.max(...episodes.map(e => parseInt(e.id))) + 1);
        setEpisodes([{ ...currentEpisode, id: newId }, ...episodes]);
      }
      setIsEditing(false);
      setCurrentEpisode(emptyEpisode);
    } catch (error) {
      console.error("Error saving episode:", error);
    }
    setLoading(false);
  };

  // Delete episode
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this episode?")) return;
    setEpisodes(episodes.filter(ep => ep.id !== id));
  };

  // Toggle featured
  const toggleFeatured = async (id) => {
    setEpisodes(episodes.map(ep => ({ ...ep, featured: ep.id === id ? !ep.featured : false })));
  };

  // Toggle published
  const togglePublished = async (id) => {
    setEpisodes(episodes.map(ep => ep.id === id ? { ...ep, published: !ep.published } : ep));
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/podcast-episodes" className="text-stone-500 hover:text-stone-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-serif text-stone-900">Podcast Admin</h1>
          </div>
          <button
            onClick={() => { setCurrentEpisode(emptyEpisode); setIsEditing(true); }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Episode
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Episode Editor Modal */}
        {isEditing && (
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl my-8">
              <div className="p-6 border-b border-stone-100 flex items-center justify-between">
                <h2 className="font-serif text-xl text-stone-900">
                  {currentEpisode.id ? "Edit Episode" : "New Episode"}
                </h2>
                <button onClick={() => setIsEditing(false)} className="text-stone-400 hover:text-stone-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Episode Number</label>
                    <input type="number" value={currentEpisode.episodeNumber} onChange={(e) => setCurrentEpisode({ ...currentEpisode, episodeNumber: parseInt(e.target.value) || "" })} className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Category</label>
                    <select value={currentEpisode.category} onChange={(e) => setCurrentEpisode({ ...currentEpisode, category: e.target.value })} className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent">
                      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Title</label>
                  <input type="text" value={currentEpisode.title} onChange={(e) => setCurrentEpisode({ ...currentEpisode, title: e.target.value })} className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent" placeholder="Episode title..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Description</label>
                  <textarea rows={3} value={currentEpisode.description} onChange={(e) => setCurrentEpisode({ ...currentEpisode, description: e.target.value })} className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-900 focus:border-transparent" placeholder="Episode description..." />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Guest Name</label>
                    <input type="text" value={currentEpisode.guestName} onChange={(e) => setCurrentEpisode({ ...currentEpisode, guestName: e.target.value })} className="w-full px-3 py-2 border border-stone-200 rounded-lg" placeholder="Optional" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Duration</label>
                    <input type="text" value={currentEpisode.duration} onChange={(e) => setCurrentEpisode({ ...currentEpisode, duration: e.target.value })} className="w-full px-3 py-2 border border-stone-200 rounded-lg" placeholder="e.g., 45 min" />
                  </div>
                </div>
                {/* Media Type */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Media Type</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="mediaType" value="video" checked={currentEpisode.mediaType === "video"} onChange={() => setCurrentEpisode({ ...currentEpisode, mediaType: "video" })} className="text-stone-900" />
                      <Video className="w-4 h-4" /> Video
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="mediaType" value="audio" checked={currentEpisode.mediaType === "audio"} onChange={() => setCurrentEpisode({ ...currentEpisode, mediaType: "audio" })} className="text-stone-900" />
                      <Music className="w-4 h-4" /> Audio
                    </label>
                  </div>
                </div>
                {/* YouTube URL */}
                {currentEpisode.mediaType === "video" && (
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">YouTube URL or Video ID</label>
                    <div className="flex gap-2">
                      <input type="text" value={currentEpisode.youtubeUrl || currentEpisode.youtubeVideoId} onChange={(e) => handleYouTubeUrlChange(e.target.value)} className="flex-1 px-3 py-2 border border-stone-200 rounded-lg" placeholder="https://youtube.com/watch?v=... or video ID" />
                    </div>
                    {currentEpisode.youtubeVideoId && (
                      <div className="mt-2 aspect-video max-w-xs rounded-lg overflow-hidden bg-stone-100">
                        <img src={`https://img.youtube.com/vi/${currentEpisode.youtubeVideoId}/mqdefault.jpg`} alt="Thumbnail" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                )}
                {/* Audio URL */}
                {currentEpisode.mediaType === "audio" && (
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Audio URL</label>
                    <input type="text" value={currentEpisode.audioUrl} onChange={(e) => setCurrentEpisode({ ...currentEpisode, audioUrl: e.target.value })} className="w-full px-3 py-2 border border-stone-200 rounded-lg" placeholder="https://..." />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Publish Date</label>
                    <input type="date" value={currentEpisode.publishDate} onChange={(e) => setCurrentEpisode({ ...currentEpisode, publishDate: e.target.value })} className="w-full px-3 py-2 border border-stone-200 rounded-lg" />
                  </div>
                  <div className="flex items-end gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={currentEpisode.featured} onChange={(e) => setCurrentEpisode({ ...currentEpisode, featured: e.target.checked })} className="rounded text-stone-900" />
                      <Star className="w-4 h-4" /> Featured
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={currentEpisode.published} onChange={(e) => setCurrentEpisode({ ...currentEpisode, published: e.target.checked })} className="rounded text-stone-900" />
                      <Eye className="w-4 h-4" /> Published
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-stone-100 flex justify-end gap-3">
                <button onClick={() => setIsEditing(false)} className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors">Cancel</button>
                <button onClick={handleSave} disabled={loading} className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 disabled:opacity-50">
                  <Save className="w-4 h-4" /> {loading ? "Saving..." : "Save Episode"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Episodes Table */}
        <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Ep</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Title</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Type</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-stone-500 uppercase">Status</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-stone-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {episodes.map((episode) => (
                <tr key={episode.id} className="hover:bg-stone-50">
                  <td className="px-4 py-3 text-sm text-stone-600">{episode.episodeNumber}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-stone-900 line-clamp-1">{episode.title}</div>
                    {episode.guestName && <div className="text-xs text-stone-500">with {episode.guestName}</div>}
                  </td>
                  <td className="px-4 py-3 text-sm text-stone-600">{episode.category}</td>
                  <td className="px-4 py-3">
                    {episode.mediaType === "video" ? <Video className="w-4 h-4 text-stone-500" /> : <Music className="w-4 h-4 text-stone-500" />}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => toggleFeatured(episode.id)} title="Featured" className={`p-1 rounded ${episode.featured ? 'text-amber-500' : 'text-stone-300 hover:text-stone-400'}`}>
                        <Star className="w-4 h-4" fill={episode.featured ? "currentColor" : "none"} />
                      </button>
                      <button onClick={() => togglePublished(episode.id)} title="Published" className={`p-1 rounded ${episode.published ? 'text-green-500' : 'text-stone-300 hover:text-stone-400'}`}>
                        {episode.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => { setCurrentEpisode(episode); setIsEditing(true); }} className="p-2 text-stone-500 hover:text-stone-700 hover:bg-stone-100 rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(episode.id)} className="p-2 text-stone-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {episodes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-500">No episodes yet. Click "Add Episode" to create one.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

