"use client";

import BlogPost from "../../../components/BlogPost";

export default function Page({ params }) {
    return <BlogPost slug={params.slug} />;
}
