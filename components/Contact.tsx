export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="wrap r">
          <div className="mono" style={{ marginBottom: 26 }}>
            Contact
          </div>
          <div className="big">
            Looking for an
            <br />
            internship where I can{" "}
            <a href="https://www.linkedin.com/in/yadavibhat/" target="_blank" rel="noopener noreferrer">
              <em className="acc">build and learn.</em>
            </a>
          </div>
          <div className="links mono">
            <a href="https://www.linkedin.com/in/yadavibhat/" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://github.com/yadavibhat" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
      <footer>
        <div className="wrap mono">
          <span>© {new Date().getFullYear()} Yadavi Bhat</span>
          <span>Bengaluru, India</span>
        </div>
      </footer>
    </>
  );
}
