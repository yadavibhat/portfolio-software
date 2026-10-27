const items = [
  { tag: "Ownership", h: "Ships complete systems", p: "Frontend, backend, deployment and documentation, not just a demo.", ev: "NyayaNetra and MicroCreate are both deployed and publicly accessible." },
  { tag: "Leadership", h: "Leads and coordinates", p: "Takes the lead role, splits the work by strength and keeps the team moving.", ev: "Organized 5+ hackathons; led a 12-member tech team at DataWiz; team lead on Aegistrack, NyayaNetra and Dayflow." },
  { tag: "Range", h: "Learns outside the domain", p: "Researches, validates and delivers in fields I was not trained in.", ev: "Podium finishes in civil engineering; first on-chain payments build with x402." },
  { tag: "Communication", h: "Explains clearly", p: "Writes, debates and teaches, so technical decisions are understood by non-technical people.", ev: "Four AAKAR podiums across essay, debate, speech and presentation; led a resume workshop." },
];

export default function Expect() {
  return (
    <section id="expect">
      <div className="wrap">
        <div className="head r">
          <h2>
            What to <em>expect</em> from me
          </h2>
          <div className="mono">01 / Working style, with evidence</div>
        </div>
        <p className="lede r">
          If you work with me, you get an engineer who finishes things, <em>leads without waiting to be asked</em>, and
          picks up unfamiliar domains quickly.
        </p>
        <div className="exp r">
          {items.map((i) => (
            <div key={i.tag}>
              <div className="mono">{i.tag}</div>
              <h3>{i.h}</h3>
              <p>{i.p}</p>
              <p className="ev">{i.ev}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
