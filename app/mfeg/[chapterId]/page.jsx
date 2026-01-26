import { getChapterById, getAllChapters } from "../../../lib/militaryGuideData";
import MilitaryChapter from "../../../components/MilitaryChapter";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const chapters = getAllChapters();
  return chapters.map((chapter) => ({
    chapterId: chapter.id,
  }));
}

export default async function ChapterPage({ params }) {
  const { chapterId } = await params;
  const chapter = getChapterById(chapterId);

  if (!chapter) {
    notFound();
  }

  return <MilitaryChapter chapter={chapter} />;
}
