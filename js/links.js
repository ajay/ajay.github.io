// Renders links.json: sections of { label, href, user? } links (or { label, soon }).
const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
};

const main = document.querySelector("main");
const { sections } = await (await fetch("./links.json")).json();
for (const { title, rel, links } of sections) {
  // Sections with usernames line them up in a second column.
  const ul = el("ul", links.some((l) => l.user) ? "accounts" : "");
  for (const { label, href, soon, user } of links) {
    const li = el("li");
    if (href) {
      const a = el("a", "", label);
      a.href = href;
      if (rel) a.rel = rel;
      li.append(a);
      if (user) li.append(el("span", "user", user));
    } else {
      li.append(el("span", "soon", label));
      if (soon) li.append(el("span", "tag", "soon"));
    }
    ul.append(li);
  }
  const section = el("section");
  section.append(el("h2", "", title), ul);
  main.append(section);
}
