import Image from "next/image";
import { gallery } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="wrap">
        <div className="head r">
          <h2>
            Through the <em>lens</em>
          </h2>
          <p>
            Strategist and photographer with NMIT’s Department of Photography. These are real moments from the events
            above; hover to bring them into colour.
          </p>
        </div>
        <div className="gal r">
          {gallery.map((g) => (
            <figure key={g.src} tabIndex={0}>
              <Image
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                sizes="(max-width:520px) 100vw, (max-width:900px) 50vw, 33vw"
              />
              <figcaption>
                <b>{g.title}</b>
                <span className="mono">{g.cap}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
