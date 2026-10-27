import { projects, results, statuses } from "@/lib/data";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="head r">
          <h2>
            Selected <em>work</em>
          </h2>
          <p>Each project below states the problem, my role, what was built and the tools used.</p>
        </div>
        <div id="projects">
          {projects.map(([year, title, event, problem, role, built, tools, link], i) => (
            <div className={`proj r${results[title] ? " star" : ""}`} key={title}>
              <div className="mono">
                {year}
                <br />
                {pad(i + 1)} / {pad(projects.length)}
              </div>
              <div>
                <h3>{title}</h3>
                <div className="mono role">{event}</div>
              </div>
              <div>
                <dl>
                  <dt>Problem</dt>
                  <dd>{problem}</dd>
                  <dt>My role</dt>
                  <dd>{role}</dd>
                  <dt>Built</dt>
                  <dd>{built}</dd>
                  {results[title] && (
                    <>
                      <dt>Result</dt>
                      <dd>
                        <span className="res-b">{results[title]}</span>
                      </dd>
                    </>
                  )}
                  {statuses[title] && (
                    <>
                      <dt>Status</dt>
                      <dd>
                        <span className="res-b">{statuses[title]}</span>
                      </dd>
                    </>
                  )}
                  <dt>Tools</dt>
                  <dd>
                    <ul>
                      {tools.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </dd>
                </dl>
                {link && (
                  <a className="lnk" href={link} target="_blank" rel="noopener noreferrer">
                    View on GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
