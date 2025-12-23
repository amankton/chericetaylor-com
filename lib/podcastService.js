// Podcast Episode Service - Firebase Firestore operations
import { db } from './firebase';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
} from 'firebase/firestore';

const COLLECTION_NAME = 'podcast_episodes';

// Episode schema for reference:
// {
//   id: string (auto-generated)
//   episodeNumber: number
//   title: string
//   description: string
//   mediaType: 'video' | 'audio'
//   youtubeVideoId: string (for video episodes)
//   youtubeUrl: string (full YouTube URL)
//   audioUrl: string (for audio episodes)
//   thumbnailUrl: string
//   duration: string (e.g., "45 min")
//   category: string
//   guestName: string (optional)
//   guestTitle: string (optional)
//   featured: boolean
//   published: boolean
//   publishDate: Timestamp
//   createdAt: Timestamp
//   updatedAt: Timestamp
// }

// Get all episodes
export async function getAllEpisodes() {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('published', '==', true),
      orderBy('publishDate', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      publishDate: doc.data().publishDate?.toDate?.() || new Date(),
    }));
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return [];
  }
}

// Get all episodes for admin (including unpublished)
export async function getAllEpisodesAdmin() {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('episodeNumber', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      publishDate: doc.data().publishDate?.toDate?.() || new Date(),
    }));
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return [];
  }
}

// Get single episode by ID
export async function getEpisodeById(id) {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
        publishDate: docSnap.data().publishDate?.toDate?.() || new Date(),
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching episode:', error);
    return null;
  }
}

// Get featured episode
export async function getFeaturedEpisode() {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('featured', '==', true),
      where('published', '==', true),
      limit(1)
    );
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data(),
        publishDate: doc.data().publishDate?.toDate?.() || new Date(),
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching featured episode:', error);
    return null;
  }
}

// Get episodes by category
export async function getEpisodesByCategory(category) {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('category', '==', category),
      where('published', '==', true),
      orderBy('publishDate', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      publishDate: doc.data().publishDate?.toDate?.() || new Date(),
    }));
  } catch (error) {
    console.error('Error fetching episodes by category:', error);
    return [];
  }
}

// Create new episode
export async function createEpisode(episodeData) {
  try {
    const now = Timestamp.now();
    const newEpisode = {
      ...episodeData,
      publishDate: episodeData.publishDate 
        ? Timestamp.fromDate(new Date(episodeData.publishDate))
        : now,
      createdAt: now,
      updatedAt: now,
    };
    const docRef = await addDoc(collection(db, COLLECTION_NAME), newEpisode);
    return { id: docRef.id, ...newEpisode };
  } catch (error) {
    console.error('Error creating episode:', error);
    throw error;
  }
}

// Update episode
export async function updateEpisode(id, episodeData) {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const updateData = {
      ...episodeData,
      updatedAt: Timestamp.now(),
    };
    if (episodeData.publishDate) {
      updateData.publishDate = Timestamp.fromDate(new Date(episodeData.publishDate));
    }
    await updateDoc(docRef, updateData);
    return { id, ...updateData };
  } catch (error) {
    console.error('Error updating episode:', error);
    throw error;
  }
}

// Delete episode
export async function deleteEpisode(id) {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting episode:', error);
    throw error;
  }
}

// Extract YouTube video ID from URL
export function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

