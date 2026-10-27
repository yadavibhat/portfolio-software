import { ledger, seen } from "@/lib/data";

const cards = [
  { tag: "Languages", h: "Core programming", chips: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"], p: "C++ and Java for data structures and algorithms practice; TypeScript and JavaScript for product work; Python for scripting and prototypes." },
  { tag: "Web & data", h: "Full-stack", chips: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Supabase", "SQL", "Tailwind", "HTML / CSS"], p: "REST backends, document and Postgres databases with offline-safe backups and row-level security, dashboards, and responsive front ends." },
  { tag: "Emerging", h: "AI & Web3", chips: ["Conversational AI", "Databricks Genie", "Algorand", "x402", "USDC", "Web3Auth", "Pera Wallet"], p: "Cited, bilingual AI assistants and agent-to-service payments with on-chain verification." },
  { tag: "Delivery", h: "Platforms & practice", chips: ["Git & GitHub", "Zoho Catalyst", "Google Cloud", "LaTeX", "Figma"], p: "Version control and open-source workflows, cloud deployment, and IEEE-format technical writing." },
  { tag: "Foundations", h: "Computer science", chips: ["DSA", "OOP", "DBMS", "Computer Networks", "Theory of Computation"], p: "Structured, pattern-based placement preparation with company-wise problem sets; ns-2 network simulation coursework." },
  { tag: "Media", h: "Design & visual craft", chips: ["Photography", "Video editing", "Figma", "Presentation design"], p: "Event photography for NMIT’s Department of Photography and OSCode, and pitch decks for competitions." },
];

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="head r">
          <h2>
            Tools &amp; <em>technical depth</em>
          </h2>
          <p>What I use, what I have used it for, and the repositories that show it. 36 repositories on GitHub.</p>
        </div>
        <div className="stack r">
          {cards.map((c, i) => (
            <div key={c.tag}>
              <div className="mono">{c.tag}</div>
              <h4>{c.h}</h4>
              <div className="chips">
                {c.chips.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <p>{c.p}</p>
              {seen[i] && <p className="ev">Seen in: {seen[i]}</p>}
            </div>
          ))}
        </div>
        <div className="sub2 mono r">Repository ledger · selected</div>
        <div className="ledger r">
          {ledger.map(([repo, lang, note]) => (
            <div className="row" key={repo}>
              <b>{repo}</b>
              <span className="mono">{lang}</span>
              <span>{note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
