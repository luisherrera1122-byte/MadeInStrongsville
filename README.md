# Made In Strongsville — League Site (v2, Elite Edition)

A multi-page site for the league: home, draft day info, league members, hall of fame, polls, and rules. Pure HTML/CSS/JS — no build step, no framework, free to host on GitHub Pages.

## Pages
- `index.html` — Home: hero, stat ticker, championship banners, leaderboard teaser
- `draft.html` — Draft Day Info: live countdown to Aug 20, location (placeholder), dues ($125), payouts (placeholder), weekend schedule
- `members.html` — League Members: 12 owner cards, click to expand full story
- `hall-of-fame.html` — Leaderboards (titles, win%, wins, top-6s) + Wall of Shame + full season-by-season history
- `polls.html` — Polls filterable by category (League Rules / Draft / General), dated, with result bars for closed polls
- `rules.html` — League constitution, placeholder sections ready for your real rules

## Editing content
Almost everything lives in **`assets/data.js`** — one file, plain arrays:
- `ROSTER` — the 12 members, their stats, and their story
- `TIMELINE` — season-by-season recap (also powers the homepage banners)
- `LB_TITLES`, `LB_WINPCT`, `LB_WINS`, `LB_TOP6`, `LB_SACKOS` — Hall of Fame leaderboards
- `POLLS` — each poll's category, date, status (`"open"` or `"closed"`), and options. For a closed poll, give each option a percentage (numbers should add to 100); for an open poll, leave percentages as `null`.

To add a new poll: copy an existing object in `POLLS` and edit it. To close a poll and post results: change `status` to `"closed"`, update the `date`, and fill in the percentages.

Draft countdown target date is set in `draft.html` near the bottom (`buildCountdown(...)`) — update the date there if it changes.

## About the Polls page
This is a static site, so there's no server to store votes from every visitor. The page is built to **display and archive** polls (exactly like the roster/timeline pattern above) rather than collect live votes itself. Two ways to actually collect votes:
1. Keep voting in your group chat/text thread, then update `POLLS` here with the final results (simplest, no setup).
2. Embed a free Google Form for voting and link to it from the "open" poll's card, then transcribe results into `data.js` once it closes.

## Deploy to GitHub Pages (free hosting)

1. Create a new GitHub repository (public), e.g. `made-in-strongsville`.
2. Upload all files in this folder (`index.html`, `draft.html`, `members.html`, `hall-of-fame.html`, `polls.html`, `rules.html`, `CNAME`, and the `assets/` folder) to the root of the repo.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
5. Under **Custom domain**, enter `MadeInStrongsville.com` and save.
6. Wait for the DNS check (green checkmark) — see the DNS section below.

## Point the domain at GitHub (DNS)

The domain is currently on Wix — check Wix's domain settings to see whether Wix manages DNS for it or whether it's pointed elsewhere. Add these records wherever DNS is actually managed:

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
