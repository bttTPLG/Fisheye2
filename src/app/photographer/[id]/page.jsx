import { getPhotographer } from "@/app/lib/prisma-db";
import Header from "@/components/Header/Header";
import PhotographerHeader from "@/components/PhotographeHeader/PhotographeHeader";
import "@/styles/photographerPage.css";

export default async function Page({ params }) {
  const { id } = await params;
  const photographer = await getPhotographer(id);

  return (
    <div className="page">
      <Header />
      <main className="main">
        <PhotographerHeader photographer={photographer} />
      </main>
    </div>
  );
}
