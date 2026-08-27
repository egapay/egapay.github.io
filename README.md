# Redirect stub for egapay.github.io

Published to the `gh-pages` branch with `npm run deploy:redirect`. The portfolio
itself now lives at https://www.ethangapay.com (deployed from `main` by Vercel);
this folder is everything the old GitHub Pages URL still needs to serve.

- `index.html` — sends the root to the new domain, preserving the hash so old
  deep links like `/#projects` still land on the right section.
- `404.html` — catches every other path (`/resume.pdf`, ...) and forwards it
  with the path intact. The three project sites never reach this file: GitHub
  serves `/blackjack-analysis/`, `/omni-goods-dashboard/`, and
  `/steam-game-analysis/` from their own repos, so those URLs are unaffected.

## Why the images are here

Those three project repos hardcode this domain for the portfolio's favicons and
`og:image`:

    https://egapay.github.io/favicon-96x96.png
    https://egapay.github.io/egapay.jpg

Favicon requests and social-preview scrapers don't run JavaScript or follow a
meta refresh, so if this branch only held the two HTML files, they would receive
the 404 page's markup where an image was expected — silently breaking the
favicons and link previews on all three project pages.

Keeping real copies here means the old URLs still resolve and the project repos
need no changes. Copy the originals from `public/` if they are ever updated:

    cp public/favicon-96x96.png public/favicon.svg public/favicon.ico \
       public/apple-touch-icon.png public/egapay.jpg redirect/

The alternative is repointing those references in each project repo at
`www.ethangapay.com`, after which these copies can be deleted.
