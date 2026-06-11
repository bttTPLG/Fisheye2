import Image from "next/image";
import "@/styles/photCard.css";
import { FaHeart } from "react-icons/fa";

export default function PhotoCard({ title, image, likes }) {
  return (
    <article>
      <Image
        src={`/assets/${image}`}
        width={350}
        height={300}
        alt={`Photo ${title}`}
        className="pictur"
      />
      <div className="title-and-like">
        <p>{title}</p>
        <div className="like">
          <p className="counter">{likes}</p>
          <FaHeart className="heart-icon" />
        </div>
      </div>
    </article>
  );
}
