# pratik.ai — Personal Website

> **Overgoal:** Establish Pratik Bhavsar as the definitive voice in AI evaluation engineering — a destination that reflects deep expertise, real-world impact, and an accessible, founder-level public presence. The site should feel like the person: sharp, minimal, no fluff.

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#f7f6f2` | Page background (warm off-white) |
| `--red` | `#e35654` | Primary accent, CTAs, section labels |
| `--black` | `#000000` | Text, nav, dark sections |
| `--white` | `#ffffff` | Cards, components |
| Font | Inter (Google) | All text — weights 300–900 |
| Radius | 10–18px | Cards and containers |
| Max width | 1100px | Centered layout |

---

## Site Structure

```
index.html          ← Single-page site, zero dependencies
images/
  headshot.png      ← Profile photo
  casual.jpeg       ← Full-body casual photo
  book.png          ← Pratik holding his printed book
```

---

## Sections

1. **Navigation** — Sticky, blur-backdrop nav with section links
2. **Hero** — Name, title, bio, stats (23K LinkedIn / 4 books / #1 hackathon), photo, social pills
3. **Books** *(featured, dark background)* — 4 Mastering GenAI books with CSS-crafted covers linking to galileo.ai
4. **About** — Full bio, career narrative, education, key highlights
5. **Open Source** — Agent Leaderboard, Hallucination Index, BRAG
6. **Talks** — 6 featured talks from 11-video YouTube playlist
7. **Experience** — Full career timeline (Galileo → Maxpool → Enterpret → Jina → TaskHuman → Morningstar)
8. **Community & Writing** — Maxpool, Substack (pakodas), galileo.ai/blog
9. **Recognition** — Top AI Developer 2023, Andrew Ng newsletter, Latent Space, hackathon wins
10. **Contact** — Social links grid (LinkedIn, Twitter, GitHub, Substack, Maxpool, Email)
11. **Footer**

---

## Books (Mastering GenAI Series)

All free to read at galileo.ai:

| Book | URL | Pages |
|---|---|---|
| Mastering Multi-Agent Systems | galileo.ai/multi-agent-book | 165 (print edition) |
| Mastering AI Agents | galileo.ai/mastering-agents-ebook | — |
| Mastering RAG 2.0 | galileo.ai/mastering-rag | 240+ |
| Mastering LLM-as-a-Judge | galileo.ai/mastering-llm-as-a-judge | — |

---

## GitHub Pages Deployment

```bash
# The site is static — just push and enable GitHub Pages

git add .
git commit -m "Update personal website"
git push origin main

# In repo settings → Pages → Source: Deploy from branch → main → / (root)
# Custom domain: set to pratik.ai in CNAME file (see task list)
```

---

## Task List

### Done ✅
- [x] Single-page HTML site with full design system
- [x] Hero section with photo, stats, social pills
- [x] Books section (highlighted, dark background) with all 4 books
- [x] About section with career narrative
- [x] Open Source section (Agent Leaderboard, Hallucination Index, BRAG)
- [x] Talks section (6 featured from YouTube playlist)
- [x] Full experience timeline
- [x] Community & Writing section (Maxpool, Substack, blogs)
- [x] Recognition section (6 achievement cards)
- [x] Contact section with all social links
- [x] Responsive design (mobile, tablet, desktop)
- [x] SEO meta tags + Open Graph tags

### To Do 📋
- [ ] Add `CNAME` file with `pratik.ai` for GitHub Pages custom domain
- [ ] Configure DNS: point `pratik.ai` A-records to GitHub Pages IPs
- [ ] Add real book cover images (screenshot/crop from galileo.ai pages)
- [ ] Add YouTube talk embed or thumbnail previews in Talks section
- [ ] Add a featured "What I'm working on" section for current projects
- [ ] Add Quora hackathon stories link (quora.com/What-happens-at-a-hackathon/answer/Pratik-Bhavsar)
- [ ] Add Morningstar quantitative fund ML blog post link
- [ ] Add Google Analytics / Plausible for traffic analytics
- [ ] Dark mode toggle
- [ ] Add subtle scroll animations (Intersection Observer)
- [ ] A/B test hero copy for conversion to book downloads

---

## Key Links

| Platform | URL |
|---|---|
| Site | https://pratik.ai |
| LinkedIn | https://linkedin.com/in/bhavsarpratik |
| Twitter / X | https://x.com/ptkbhv |
| GitHub | https://github.com/bhavsarpratik |
| Substack | https://pakodas.substack.com |
| Community | https://maxpool.dev |
| YouTube | [Talks Playlist](https://www.youtube.com/playlist?list=PL2H7HbmQHDJW7JmLzMRkZMeNV_wOxdcXi) |
| Galileo | https://galileo.ai/blog |
