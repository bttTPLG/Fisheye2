import Image from "next/image";
import Link from "next/link";
import "@/styles/card.css";

export default function Card({
  name = "Paul",
  localisation = "Paris",
  citation = "Photo of the day",
  prix = "100 €/jour",
}) {
  return (
    <article className="profile-card">
      <Link href="/photographer" className="name-and-img-container">
        <Image
          src="/assets/TracyGalindo.jpg"
          width={200}
          height={200}
          alt={``}
          className="profile-img"
        />
        <h2>{name}</h2>
      </Link>
      <div className="info">
        <p className="localisation">{localisation}</p>
        <p className="citation">{citation}</p>
        <p className="prix">{prix}</p>
      </div>
    </article>
  );
}