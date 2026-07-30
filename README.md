# Made In Strongsville — League Site

A multi-page site for the league: home, draft day info, league members, hall of fame, polls, and rules. Pure HTML/CSS/JS — no build step, no framework, free to host on GitHub Pages.

**Everything lives flat in one folder — no subfolders.** This is deliberate: GitHub's drag-and-drop upload doesn't reliably carry subfolders over, and a missing `assets/` folder is exactly what caused the site to show up unstyled last time. Keeping every file at the top level means "select all, drag in" always works.

## Files
- `index.html` — Home: hero, stat ticker, championship banners, leaderboard teaser
- `draft.html` — Draft Day Info: live countdown to Aug 20, location (placeholder), dues ($125), payouts (placeholder), weekend schedule
- `members.html` — League Members: 12 owner cards, click to expand full story
- `hall-of-fame.html` — Leaderboards (titles, win%, wins, top-6s) + Wall of Shame + full season-by-season history
- `polls.html` — Polls filterable by category (League Rules / Draft / General), dated, with result bars for closed polls
- `rules.html` — League constitution, placeholder sections ready for your real rules
- `style.css` — all styling for every page
- `data.js` — all the league data (roster, timeline, leaderboards, polls) — **this is the file you'll edit most**
- `script.js` — shared behavior (nav toggle, scroll animations, countdown)
- `CNAME` — tells GitHub Pages to serve the site at `MadeInStrongsville.com`
- `.nojekyll` — tells GitHub Pages to skip Jekyll processing (hidden file — see note below)

## Editing content
Almost everything lives in **`data.js`**:
- `ROSTER` — the 12 members, their stats, and their story
- `TIMELINE` — season-by-season recap (also powers the homepage banners)
- `LB_TITLES`, `LB_WINPCT`, `LB_WINS`, `LB_TOP6`, `LB_SACKOS` — Hall of Fame leaderboards
- `POLLS` — each poll's category, date, status (`"open"` or `"closed"`), and options. For a closed poll, give each option a percentage (should add to 100); for an open poll, leave percentages as `null`.

## About the Polls page
This is a static site, so there's no server to store votes from every visitor. The page **displays and archives** polls rather than collecting live votes itself. Either keep voting in your group chat and update `POLLS` with final results, or embed a free Google Form for voting and transcribe results here once it closes.

## Fixing your current repo (missing styles)
Your repo is currently missing `data.js` and `script.js`, and has a `style.css` in the wrong place relative to what the old HTML expected. To fix it:
1. Delete the old `style` file from your repo (the one sitting in the root from before).
2. Upload these six files fresh: `style.css`, `data.js`, `script.js`, and re-upload `index.html`, `draft.html`, `members.html`, `hall-of-fame.html`, `polls.html`, `rules.html` (they now point to `style.css` / `data.js` / `script.js` directly, not `assets/...`).
3. Commit. GitHub Pages will redeploy automatically within a minute or two.

## Deploy to GitHub Pages (free hosting)

1. Create a new GitHub repository (public), e.g. `made-in-strongsville`.
2. Upload **all** files in this folder directly into the root of the repo — including the hidden `.nojekyll` file.
   - `.nojekyll` won't show in your file browser by default (macOS: `Cmd+Shift+.` in Finder; Windows: enable "hidden items" in File Explorer's View tab). If it doesn't come through in the upload, create it directly on GitHub instead: **Add file → Create new file**, name it exactly `.nojekyll`, leave it empty, commit.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch** → branch `main`, folder `/ (root)` → **Save**.
5. Under **Custom domain**, enter `MadeInStrongsville.com` → **Save**.
6. Wait for the DNS check (green checkmark) — see below.

## Point the domain at GitHub (DNS)

The domain is currently on Wix — check Wix's domain settings to see whether Wix manages DNS for it. Add these records wherever DNS is actually managed:

**A records** (root domain `MadeInStrongsville.com` → GitHub's IPs, add all four):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME record** (`www` subdomain):
```
www   →   <your-github-username>.github.io
```

Back in **Settings → Pages**, once DNS resolves, check **Enforce HTTPS**.

DNS changes can take a few minutes up to 24 hours to fully propagate.

## Teaser mode (currently active)
Right now, `index.html` is a **countdown teaser page** (counting down to August 14, 2026), not the real site. It has zero clickable links or navigation on purpose — this is what your league members will see if you send them `madeinstrongsville.com`.

The real site still exists in full — it just moved to **`home.html`**. Bookmark `madeinstrongsville.com/home.html` for yourself; that's the actual site with all your changes, exactly as before. Every internal page (Draft Day Info, Members, Hall of Fame, etc.) still links back to `home.html` correctly.

**Important limitation:** `madeinstrongsville.com` and `madeinstrongsville.com/index.html` are always the same file on any web server — there's no way to make those two URLs show different content. `home.html` is the workaround. This is *not* password protection — it's just that nothing on the teaser page links to it. Someone who already knows or guesses that URL could still view it.

There's also a `robots.txt` in place that tells search engines not to index the real pages while the teaser is up.

### Flipping the switch on reveal day (Aug 14, 2026 or whenever you're ready)
1. Delete (or rename) the current `index.html` (the teaser).
2. Rename `home.html` to `index.html`.
3. Every page's "Home" nav link currently points to `home.html` — do a find-and-replace across all the `.html` files, changing `href="home.html"` back to `href="index.html"`.
4. Update `robots.txt` to remove the `Disallow` lines (or delete the file) so search engines can index the real site again.
5. Re-upload everything.
