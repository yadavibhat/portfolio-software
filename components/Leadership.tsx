import { beyond, milestones, timeline } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="lead">
      <div className="wrap">
        <div className="head r">
          <h2>
            People &amp; <em>communities</em>
          </h2>
          <p>Technical leadership, documentation and event work across NMIT’s student groups.</p>
        </div>
        <div className="lead r">
          <div>
            <div className="num">12</div>
            <h3>DataWiz NMIT</h3>
            <p>
              Tech Co-Lead since September 2025. I have organized 5+ hackathons. For ODOO x NMIT, DataWiz’s national
              hackathon (club-wide: 8,136 registrations, 252 finalists), I led the 12-member tech team. I also ran
              WizAlyze for 30+ participants.
            </p>
          </div>
          <div>
            <div className="mono">OSCode · GDG NMIT</div>
            <h3>Open source &amp; documentation</h3>
            <p>
              Tech member at OSCode NMIT and documentation member at GDG NMIT. Part of the organizing team for the GSoC
              meetup at Google Ananta and TechSync at Microsoft Research India.
            </p>
          </div>
          <div>
            <div className="mono">Mentoring</div>
            <h3>Teaching what I learn</h3>
            <p>
              Led a hands-on workshop on ATS-friendly resumes, guided first-year students, and supported technical
              facilitation at the OSCode GitHub workshop.
            </p>
          </div>
        </div>

        <div className="tl r">
          {timeline.map(([when, role, where]) => (
            <div className="row" key={when + role}>
              <span className="mono">{when}</span>
              <b>{role}</b>
              <span>{where}</span>
            </div>
          ))}
        </div>

        <div className="sub2 mono r">Beyond the code</div>
        <div className="beyond r">
          {beyond.map((b) => (
            <div key={b.title}>
              <div className="mono">{b.tag}</div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>

        <div className="sub2 mono r">Personal milestones</div>
        <div className="ms r">
          {milestones.map(([when, title, note, key]) => (
            <div className={key ? "k" : undefined} key={when + title}>
              <span className="mono">{when}</span>
              <span>
                <b>{title}</b>
                <br />
                {note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
