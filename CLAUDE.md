# CLAUDE.md

Guidance for Claude Code in this repository.

## Project

The root site of https://ajay.engineer (GitHub Pages; the custom domain is in `CNAME`): a minimal page of links.
Pushing to `main` deploys.

- Subpages are separate repos published under the same domain, e.g. `ajay/travel` at `/travel/`.
- There's no build step: `index.html` holds the header and intro, `style.css` the page layout.
- The link sections live in `links.json`; `js/links.js` renders them. Each section has a `title`, an optional
  `rel` (socials use `"me"`) and `links`. Each link is `{ label, href }` with an optional `user` (the account name,
  shown dimmed beside it), or `{ label, soon: true }` for a page that doesn't exist yet.
- The shared look of ajay.engineer pages comes from `site-common/theme.css` (a git submodule): palette tokens, base
  type, the header bar and brand, links. Keep `style.css` to page layout. Anything the subpages should share goes in
  `site-common`, followed by a submodule bump in every site repo.

## Commands

```bash
make serve    # http://localhost:8000
make format   # prettier --write; run before pushing
make lint     # htmlhint + prettier --check (what CI checks)
```

`make ci` also checks that the submodules (`site-common`, with `build-tools` nested inside) are pinned to their
remote's latest `main`. CI goes red when they lag, and the fix is a `site-common: update to <sha>` commit.

## Conventions

- Monospace and all lowercase. Links are plain words, one per line, alphabetical within each section (the order
  in `links.json` is the order shown).
- Pages are labelled with their path (`/travel`). Subpage links are root-relative (`/travel/`); external links are
  absolute. Socials carry `rel="me"`.
