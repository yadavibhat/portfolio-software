const links: [string, string][] = [
  ["#expect", "Approach"],
  ["#work", "Work"],
  ["#stack", "Stack"],
  ["#rec", "Recognition"],
  ["#lead", "Leadership"],
  ["#gallery", "Gallery"],
  ["#contact", "Contact"],
];

export default function Nav() {
  return (
    <>
      <a className="skip" href="#expect">
        Skip to content
      </a>
      <nav className="mono">
        <a href="#hero" style={{ margin: 0 }}>
          Yadavi Bhat
        </a>
        <div>
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
