import BlogPost from "../../../components/BlogPost";
import { db } from "../../../lib/firebase";
import { collection, getDocs, query } from "firebase/firestore";

// This function is called at build time to generate the list of blog slugs
export async function generateStaticParams() {
    const q = query(collection(db, "blogs"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
        slug: doc.data().slug,
    }));
}

export default function Page({ params }) {
    return <BlogPost slug={params.slug} />;
}
