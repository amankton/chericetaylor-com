
// Scripts/seed-firebase.mjs
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

// Manual .env.local parsing
const loadEnv = () => {
    try {
        const envPath = path.resolve(process.cwd(), '.env.local');
        const envFile = fs.readFileSync(envPath, 'utf8');
        const envVars = {};
        envFile.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                envVars[key.trim()] = value.trim();
            }
        });
        return envVars;
    } catch (error) {
        console.error("Could not load .env.local", error);
        return {};
    }
};

const env = loadEnv();

const firebaseConfig = {
    apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

console.log("Initializing Firebase with project:", firebaseConfig.projectId);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Data from chericetaylor.com/pearls-of-wisdom/
const podcastData = [
    {
        "title": "What is the Common Application?",
        "description": "An overview of the Common Application process.",
        "link": "https://www.youtube.com/watch?v=Xt7Uzj6qXmo"
    },
    {
        "title": "Early Childhood and Social Emotional Awareness Expert Dana Kaplan",
        "description": "Dana Kaplan shares pearls of wisdom with Time Matters! hosted by Cherice Taylor.",
        "link": "https://www.youtube.com/watch?v=T0qq7qA98n8"
    },
    {
        "title": "Are you interested in the health sciences field? (Part 1)",
        "description": "Karen O’Neil, Admissions Coordinator – M.S. Physician Assistant & OTD Occupational Therapy Studies, shares pearls of wisdom.",
        "link": "https://www.youtube.com/watch?v=fXC67rzsXQM"
    },
    {
        "title": "Are you interested in the health sciences field? (Part 2)",
        "description": "Continuation of the conversation with Karen O'Neil regarding the health sciences field and advanced degrees.",
        "link": "https://www.youtube.com/watch?v=OFFxQtS2RW4"
    },
    {
        "title": "Time Matters! host shares pearls of wisdom on The Round Table Talk Show",
        "description": "Cherice Taylor shares insights on The Round Table Talk Show hosted by Sharifah Hardie.",
        "link": "https://www.youtube.com/watch?v=3aGtiyG3CdU"
    },
    {
        "title": "Sharron St. John, Partner and Broker at St. John Estates",
        "description": "Insights on starting in the real estate industry and what it takes to be successful.",
        "link": "https://www.youtube.com/watch?v=W54y8VU9HrU"
    },
    {
        "title": "Ernisha Hall - Entrepreneurship and Social Media (Part 1)",
        "description": "Co-Founder & President of Virginia Black Business Directory shares pearls of wisdom about entrepreneurship.",
        "link": "https://www.youtube.com/watch?v=eC6sUa-zpL8"
    },
    {
        "title": "Conversation with Racquel Oden – Navigation Success on Wall Street",
        "description": "Racquel Oden, Head of National Sales at JP Morgan Chase & Co., joins as a Virtual Mentor to share tips on positioning yourself for success.",
        "link": "https://www.youtube.com/watch?v=g2l0gyoGNdk"
    },
    {
        "title": "Casandra Chamblis - Tips for Budget/Accounting Field",
        "description": "Advice for those interested in pursuing a career in budget and accounting.",
        "link": "https://www.youtube.com/watch?v=jwHLs5-lBTs"
    },
    {
        "title": "A Conversation with Ed Bray, Author of Hello, Career",
        "description": "Insights for students and individuals entering the workforce from a Senior Director of HR.",
        "link": "https://www.youtube.com/watch?v=J3hZ9zuIJ80"
    },
    {
        "title": "Conversation with Nefertiti Austin, Author and Memoirist",
        "description": "Pearls of wisdom for student writers and the parents that support them.",
        "link": "https://www.youtube.com/watch?v=YeozlnapNW0"
    },
    {
        "title": "Conversation with Kevin A. Henry – Extended Stay America",
        "description": "Insights from the Executive Vice President & Chief Human Resources Officer.",
        "link": "https://www.youtube.com/watch?v=IcfCLUIVBCg"
    },
    {
        "title": "Conversation with Pam Luckie – Financial Education",
        "description": "Exploring importance of financial education and literacy.",
        "link": "https://www.youtube.com/watch?v=3TFZlGOkPY0"
    },
    {
        "title": "Conversation with Shawn V. Laws-O’Neil – Veteran Production Executive",
        "description": "Sharing pearls of wisdom from a long career in production and entertainment.",
        "link": "https://www.youtube.com/watch?v=e8vTpdXeGhA"
    },
    {
        "title": "Conversation with Dr. Karina Montilla Edmonds – SAP",
        "description": "Insights on university alliances and academies from SAP's President of Academies.",
        "link": "https://www.youtube.com/watch?v=yPZ720ER_K8"
    }
];

const extractYoutubeId = (url) => {
    try {
        const urlObj = new URL(url);
        return urlObj.searchParams.get('v');
    } catch (e) {
        return null;
    }
}

const clearCollection = async (collectionName) => {
    console.log(`Clearing ${collectionName}...`);
    const ref = collection(db, collectionName);
    const snapshot = await getDocs(ref);
    const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    console.log(`Cleared ${snapshot.size} documents from ${collectionName}`);
}

const seedData = async () => {
    try {
        console.log("Starting seed process...");

        // 1. Podcasts (Clear and Re-seed with real data)
        await clearCollection('podcasts');

        const podcastsRef = collection(db, 'podcasts');
        console.log(`Seeding ${podcastData.length} Podcasts...`);

        // Seed in reverse order so ID 1 is the oldest
        for (let i = 0; i < podcastData.length; i++) {
            const podcast = podcastData[podcastData.length - 1 - i]; // Reverse iterate

            const youtubeId = extractYoutubeId(podcast.link);

            await addDoc(podcastsRef, {
                title: podcast.title,
                description: podcast.description,
                youtubeVideoId: youtubeId,
                mediaType: 'video', // Since they are all youtube links
                publishedAt: new Date(Date.now() - (i * 86400000 * 7)), // Fake dates, 1 week apart
                duration: "Unknown",
                episodeNumber: i + 1,
                tags: ["education", "career", "interview"],
                category: "All",
                guestName: podcast.title.includes("with") ? podcast.title.split("with")[1].trim() : ""
            });
            console.log(`Added Podcast ${i + 1}: ${podcast.title}`);
        }

        // 2. Videos (Keeping simplified check for now, can perform same logic if needed)
        const videosRef = collection(db, 'videos');
        const videoSnapshot = await getDocs(videosRef);
        if (videoSnapshot.empty) {
            console.log("Seeding Videos (Placeholder)...");
            await addDoc(videosRef, {
                title: "Navigating School Transitions",
                description: "Expert advice on handling school moves for military kids.",
                youtubeId: "dQw4w9WgXcQ", // Placeholder
                publishedAt: new Date(),
                tags: ["transitions", "school"]
            });
            console.log("Added Video: Navigating School Transitions");
        }

        // 3. Blogs (Keeping simplified check)
        const blogsRef = collection(db, 'blogs');
        const blogSnapshot = await getDocs(blogsRef);
        if (blogSnapshot.empty) {
            console.log("Seeding Blogs (Placeholder)...");
            await addDoc(blogsRef, {
                title: "5 Tips for PCS Season",
                slug: "5-tips-for-pcs-season",
                content: "Moving is hard. Here are 5 tips to make it easier...",
                author: "Cherice Taylor",
                publishedAt: new Date(),
                excerpt: "Moving is hard. Here are 5 tips to make it easier..."
            });
            console.log("Added Blog: 5 Tips for PCS Season");
        }

        console.log("Seed process completed successfully!");
        process.exit(0);

    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
};

seedData();
