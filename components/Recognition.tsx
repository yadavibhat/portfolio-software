import { certs, frames, recognition } from "@/lib/data";

function Strip() {
  const render = (copy: number) =>
    frames.map(([big, title, cap, gold], i) => (
      <div
        className={`frame${gold ? " g" : ""}`}
        key={`${copy}-${i}`}
        aria-hidden={copy === 1 ? true : undefined}
      >
        <div className="mono">Frame {String(i + 1).padStart(2, "0")}</div>
        <div>
          <div className="bg" style={{ fontSize: big.length > 4 ? 46 : 76 }}>
            {big}
          </div>
          <h4>{title}</h4>
          <p>{cap}</p>
        </div>
      </div>
    ));
  // Two identical halves so the -50% translate loops seamlessly
  return (
    <div className="roll r">
      <div className="strip">
        {render(0)}
        {render(1)}
      </div>
    </div>
  );
}

const Row = ({ r }: { r: string[] }) => (
  <div className="rec r">
    <span className="mono">{r[0]}</span>
    <h4>{r[1]}</h4>
    <div className="res">{r[2]}</div>
    <p>{r[3]}</p>
  </div>
);

export default function Recognition() {
  return (
    <section id="rec">
      <div className="wrap">
        <div className="head r">
          <h2>
            Recognition, <em>explained</em>
          </h2>
          <p>Every result below includes what it was and what it shows about how I work.</p>
        </div>
        <Strip />
        <div>
          {recognition.map((r) => (
            <Row r={r} key={r[0] + r[1]} />
          ))}
        </div>
        <div className="sub2 mono r">Certifications &amp; workshops</div>
        <div>
          {certs.map((c) => (
            <Row r={c} key={c[0] + c[1]} />
          ))}
        </div>
      </div>
    </section>
  );
}
