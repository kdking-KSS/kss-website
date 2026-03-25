# King Strategic Solutions — Website Development Brief
**Version 1.0 | For use with Claude or Antigravity**

---

## 0. HOW TO USE THIS BRIEF

This is a master development brief. Hand it to Claude (or Antigravity) at the start of a build session. It contains everything needed to build the full site without additional research or clarification. Work page by page. Each section specifies layout, content, components, and behavior.

---

## 1. PROJECT OVERVIEW

**Business:** King Strategic Solutions (KSS)  
**Consultant:** KD King, "Clarity Architect"  
**Tagline:** Think Systematically. Act Strategically.  
**Domain:** kdking.business  
**Primary Goal:** Generate consulting client inquiries and bookings  
**Target Audience:** Solopreneurs, small businesses (1–20 people), nonprofits  
**Tone:** Direct, authoritative, no-nonsense, results-driven. Not warm-and-fuzzy. Not corporate-cold either. Think: trusted expert who tells you the truth.

---

## 2. TECH STACK & DEPLOYMENT

- **Output:** Pure HTML / CSS / JavaScript — no frameworks, no build tools
- **One file per page** (index.html, about.html, services.html, etc.)
- **Shared:** Single external stylesheet (style.css) + single JS file (main.js)
- **Hosting:** Hostinger via GitHub repo auto-deploy
- **Domain:** kdking.business pointed to Hostinger
- **No CMS required** — static files only
- **Booking:** Google Calendar Appointment Scheduling embedded via link/button (placeholder URL: `YOUR_GOOGLE_BOOKING_LINK` — owner will replace)
- **Contact form:** Formspree (free tier) for static form email handling — use action `https://formspree.io/f/YOUR_FORM_ID`
- **Fonts:** Load from Google Fonts (see Design System below)
- **No JavaScript frameworks** — vanilla JS only for mobile nav toggle, scroll effects, and any interactive elements

---

## 3. DESIGN SYSTEM

### 3a. Brand Colors
```css
:root {
  --color-bg-dark:     #332445;   /* Primary dark background */
  --color-purple-deep: #663399;   /* Deep purple */
  --color-purple-mid:  #7b2d8e;   /* Mid purple / primary accent */
  --color-purple-light:#c6b8d3;   /* Light purple */
  --color-purple-pale: #B183BA;   /* Muted purple for body text on white */
  --color-off-white:   #f0edef;   /* Near-white / light background */
  --color-blush:       #f5eff5;   /* Soft section background */
  --color-charcoal:    #34495e;   /* Dark grey for text */
  --color-near-black:  #332445;   /* Darkest — same as bg-dark */
  --color-white:       #ffffff;
  --color-text-dark:   #404040;   /* Body text on light backgrounds */
}
```

### 3b. Typography
```css
/* Load from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&family=Alex+Brush&display=swap');

/* Usage */
--font-display:  'Playfair Display', serif;     /* Page titles, hero headlines */
--font-body:     'Poppins', sans-serif;          /* Body copy, navigation, buttons */
--font-script:   'Alex Brush', cursive;          /* Accent text, tagline only */
```

### 3c. Aesthetic Direction
**Refined authority.** Dark backgrounds with purple depth. Clean white space on light sections. The site should feel like walking into a well-organized, slightly dramatic strategy firm — not a life coach's Instagram. Think: intentional, structured, serious about results.

- Dark hero sections (`--color-bg-dark` background, white text)
- Light content sections (`--color-blush` or `--color-off-white` background, dark text)
- Alternating dark/light rhythm through the page
- Generous whitespace — no cramming
- Subtle geometric or abstract CSS background texture on dark sections (no stock photos of people)
- Accent lines/borders in `--color-purple-mid`
- NO gradients on white backgrounds
- NO stock photos of smiling businesspeople
- Process/methodology sections can use icon + text card layouts

### 3d. Logo Treatment
Text-based logo in header: **? → ★ KING STRATEGIC SOLUTIONS**  
Render using available fonts — question mark and arrow in `--color-purple-light`, "KING STRATEGIC SOLUTIONS" in Poppins medium white, tagline "Think Systematically. Act Strategically." in Alex Brush below (smaller, `--color-purple-light`).

### 3e. Spacing & Layout
```css
--max-width: 1200px;
--section-padding: 80px 24px;
--section-padding-mobile: 48px 20px;
--border-radius: 4px;          /* Minimal rounding — this is not a bubbly brand */
--border-radius-card: 8px;
```

### 3f. Buttons
```css
/* Primary CTA */
.btn-primary {
  background: var(--color-purple-mid);
  color: white;
  padding: 14px 32px;
  font-family: var(--font-body);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.85rem;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background 0.2s ease;
}
.btn-primary:hover { background: var(--color-purple-deep); }

/* Secondary / ghost */
.btn-secondary {
  background: transparent;
  color: var(--color-purple-mid);
  border: 2px solid var(--color-purple-mid);
  padding: 12px 30px;
  /* same font/size/weight as primary */
}
.btn-secondary:hover {
  background: var(--color-purple-mid);
  color: white;
}

/* On dark backgrounds — white ghost */
.btn-ghost-white {
  background: transparent;
  color: white;
  border: 2px solid white;
  /* same sizing */
}
.btn-ghost-white:hover {
  background: white;
  color: var(--color-purple-mid);
}
```

---

## 4. GLOBAL COMPONENTS

### 4a. Navigation
- Fixed top nav, full width
- Background: `--color-bg-dark` with slight transparency + blur on scroll
- Left: Logo mark (? → ★ KING)
- Right: Nav links — Home | About | Services | Our Process | Results | Workshops | Work With Me
- "Work With Me" styled as a button (btn-primary, smaller padding)
- Mobile: hamburger menu, full-screen overlay nav
- Active page link: underline in `--color-purple-mid`

### 4b. Footer
- Dark background (`--color-bg-dark`)
- Three columns: Logo + tagline | Navigation links | Contact info + social
- Bottom bar: © 2025 King Strategic Solutions | All Rights Reserved
- KD King name appears here as "Principal Consultant: KD King"

### 4c. Page Hero (reusable pattern)
Interior pages use a slim dark hero band:
- Background: `--color-bg-dark`
- Page title in Playfair Display, large, white
- Optional one-line subtitle in Poppins light, `--color-purple-light`
- Height: ~280px centered content

### 4d. CTA Band (reusable)
Reusable full-width section used at the bottom of most pages:
- Background: `--color-purple-mid`
- Headline: "Ready to Get Unstuck?"
- Subtext: "Book a free 30-minute diagnostic call. No pitch. Just clarity."
- Button: btn-ghost-white → links to booking page

---

## 5. SITE STRUCTURE & PAGE SPECS

---

### PAGE 1: Home (index.html)

**Purpose:** Convert a cold visitor into someone who books a call or explores services. Lead with their problem, not our credentials.

#### Section 1 — Hero
- Full viewport height
- Background: `--color-bg-dark` with subtle CSS geometric pattern (diagonal lines or grid dots in `--color-purple-deep` at 15% opacity)
- **Headline (Playfair Display, large):**  
  "You Know What You Want.  
  You're Just Not Sure Why It's Not Working."
- **Subheadline (Poppins light, `--color-purple-light`):**  
  "King Strategic Solutions helps solopreneurs, small businesses, and nonprofits cut through the noise, identify what's actually broken, and build a clear path forward."
- **Two CTAs side by side:**  
  - Primary: "Book a Diagnostic Call" → /work-with-me.html  
  - Ghost: "See How We Work" → /process.html
- Scroll indicator arrow at bottom

#### Section 2 — Problem Identification ("Does This Sound Familiar?")
- Light background (`--color-blush`)
- Section label: "WHO WE HELP" in small caps, `--color-purple-mid`
- Three-column card layout (stacks to single column mobile)
- Each card: icon + bold problem statement + one sentence
  - **Card 1:** "You're stuck at step 5 when you should be at step 1. You have the vision but keep skipping the foundation."
  - **Card 2:** "You're spending money on solutions before you've diagnosed the actual problem."
  - **Card 3:** "You know something's off — in your process, your team, your strategy — but you can't name it."
- Below cards: "If any of these hit close to home, you're in the right place."

#### Section 3 — What KSS Does (Value Prop)
- Dark background (`--color-bg-dark`)
- Left: large pull quote in Playfair Display italic, `--color-purple-light`:  
  *"Most consultants tell you what to think. I teach you how to think — systematically — so you can solve the next problem too."*
- Right: Three bullet points with small purple accent markers:
  - Question-first diagnosis — no assumptions, no cookie-cutter plans
  - Direct, unfiltered guidance — we name what's actually in the way
  - Execution-focused outcomes — you leave with a plan you built, so you'll actually use it
- CTA: "Learn Our Process" → /process.html

#### Section 4 — Services Overview
- Light background
- Section title: "What We Do"
- Four cards in a 2x2 grid (stacks on mobile):
  - Strategic Business Consulting
  - Workshops & Training
  - Career Development
  - Writing Services
- Each card: service name, one-sentence description, "Learn More →" link
- Below grid: single centered CTA → /services.html

#### Section 5 — Results Snapshot
- Dark background
- Section label: "RESULTS"
- Two featured client outcomes (pull from Results page — see Page 6)
  - Outcome 1: Nonprofit secured funding, space, volunteers, and partnerships within one week of implementing strategy
  - Outcome 2: Boutique clothing brand identified untapped demographic; repositioned messaging to plus-size market
- Link: "See More Results →" → /results.html

#### Section 6 — CTA Band
Use global CTA Band component.

---

### PAGE 2: About KSS (about.html)

**Purpose:** Build credibility for the practice and the methodology. KD King as the expert — no photo, just voice and track record.

#### Section 1 — Page Hero
Title: "About King Strategic Solutions"  
Subtitle: "A consulting practice built on one principle: ask better questions."

#### Section 2 — The Practice
- Light background
- Two-column: text left, decorative right (abstract CSS geometric or the ? → ★ logo large and faded as background art)
- Copy:
  - King Strategic Solutions was founded by KD King — strategist, systems thinker, and what clients call a "Clarity Architect."
  - For over two decades, KD has worked with businesses, nonprofits, and individuals to identify what's actually broken — not what looks broken — and build systematic plans for moving forward.
  - The practice serves solopreneurs, small businesses, and nonprofits who are ready to stop spinning and start executing.

#### Section 3 — What Makes KSS Different
- Dark background
- Three-column layout, each with an accent line header:
  - **Diagnostic, not prescriptive** — We don't arrive with a template. We arrive with questions.
  - **Direct, not diplomatic** — Clients describe working with KD King as "not for the faint of heart" and "100% REAL." That's the point.
  - **Execution-focused, not theory-heavy** — You leave every engagement with a plan you co-created. Ownership drives follow-through.

#### Section 4 — KD King (The Expert)
- Light background
- No photo — use a strong typographic treatment instead
- Name displayed large in Playfair Display: "KD King"
- Title in Poppins: "Principal Consultant · Clarity Architect"
- Credentials/background in body copy:
  - 20+ years in business analysis, process improvement, training design, and strategic consulting
  - Application Support Team Lead at global energy intelligence firm (Wood Mackenzie) — managed EMEA, APAC, and Americas teams
  - Lean Six Sigma certified; ITSM practitioner
  - Published fiction author and workshop facilitator
  - Founder, King Strategic Solutions (2005–present)
- Pull quote from client: *"She helps you get completely clear on your vision."*

#### Section 5 — CTA Band
Use global CTA Band component.

---

### PAGE 3: Services (services.html)

**Purpose:** Overview hub. Each service links to its own detail page.

#### Section 1 — Page Hero
Title: "Services"  
Subtitle: "Strategic thinking applied to your specific situation. No templates. No guesswork."

#### Section 2 — Services Grid
- Light background
- Four service cards in a 2x2 grid
- Each card contains:
  - Service icon (CSS/SVG — no stock icons)
  - Service name (Playfair Display)
  - 2–3 sentence description
  - "Learn More →" link to detail page
  - Audience tag: e.g., "For: Small Businesses · Nonprofits"

**Card 1: Strategic Business Consulting** → /strategic-consulting.html  
*For solopreneurs, small businesses, and nonprofits who are stuck, scattered, or scaling faster than their systems can handle. We diagnose the real problem — not the surface symptom — and build a custom execution plan.*  
Audience: Solopreneurs · Small Businesses · Nonprofits

**Card 2: Workshops & Training** → /workshops.html  
*Interactive sessions that teach teams and individuals how to think systematically about any challenge — process improvement, critical thinking, or AI-powered career strategy.*  
Audience: Organizations · Educators · Teams

**Card 3: Career Development** → /career-development.html  
*Strategic coaching and AI-powered tools for professionals navigating job searches, career pivots, and professional reinvention. Built on the same systematic interrogation methodology.*  
Audience: Mid-Career Professionals · Job Seekers

**Card 4: Writing Services** → /writing-services.html  
*Personalized writing coaching, craft workshops, and development support for authors and professionals who want to strengthen their voice and tell better stories.*  
Audience: Authors · Professionals · Creative Writers

#### Section 3 — "Not Sure Which Service Fits?"
- Dark background, centered
- Short paragraph: "If you're not sure where to start, start with a conversation. A 30-minute diagnostic call costs nothing and clarifies everything."
- CTA: "Book a Call" → /work-with-me.html

---

### PAGE 4: Strategic Business Consulting (strategic-consulting.html)

**Purpose:** Primary conversion page. Most important service page.

#### Section 1 — Page Hero
Title: "Strategic Business Consulting"  
Subtitle: "Diagnosis before prescription. Always."

#### Section 2 — Who This Is For
- Light background
- Problem states list (from brand document):
  - You have a vision but keep starting at step 5 when you need to be at step 1
  - You're spending on solutions before understanding the real problem
  - You've tried to delegate but your team isn't delivering
  - You're overwhelmed and can't figure out why your effort isn't producing results
  - You need someone to tell you the truth — not what you want to hear

#### Section 3 — How It Works
- Dark background
- Three-step process display:
  - **Step 1 — Diagnosis:** We ask questions. A lot of them. Until we understand what's actually happening versus what appears to be happening.
  - **Step 2 — Clarity:** We identify the root problem, the missing steps, and the specific actions that will move the needle.
  - **Step 3 — Execution Plan:** You co-create a prioritized action plan with realistic timelines. Because when you build it, you own it.
- Note: "Sometimes the solution involves process improvement. Sometimes it involves automation. Sometimes it's simpler than you think. We figure that out together."

#### Section 4 — What You Can Expect
- Bullet list of deliverables/outcomes:
  - Custom diagnostic conversation (not a form or survey)
  - Prioritized action plan co-created in session
  - Direct, unfiltered strategic guidance
  - Follow-up session available to review progress
  - No recurring retainer required — engage as needed

#### Section 5 — Client Results
- Two result stories (same as homepage, expanded)

#### Section 6 — CTA Band

---

### PAGE 5: Our Process (process.html)

**Purpose:** This is your differentiator page. The ? → ★ methodology explained. Converts curious visitors into believers.

#### Section 1 — Page Hero
Title: "The KSS Method"  
Subtitle: "From question to clarity to action. Every time."

#### Section 2 — The ? → ★ Framework
- Dark background
- Large visual treatment of the ? → ★ sequence (CSS-built, not an image)
- Each symbol explained:
  - **?** — "The right question, asked in the right sequence, is more valuable than any tool or template. We start here. Always."
  - **→** — "Systematic interrogation. We follow the question wherever it leads — through assumptions, avoidance, and surface-level answers — until we reach the root."
  - **★** — "Strategic action. A clear, prioritized, executable plan built on real diagnosis — not guesswork."
- Tagline treatment: "Think Systematically. Act Strategically." in Alex Brush, large

#### Section 3 — What This Looks Like in Practice
- Light background
- Three-column examples (real scenarios from brand/experience doc):
  - **Nonprofit seeking funding:** Redirected from grant applications to relationship-building strategy. Within one week: space, funding, partnerships, and volunteers secured.
  - **Boutique clothing brand:** Identified untapped plus-size demographic. Repositioned messaging. Opened entirely new marketing channel.
  - **Overwhelmed solopreneur:** Diagnosed delegation failure at root cause. Rebuilt team evaluation criteria and task sequencing.

#### Section 4 — Why This Works
- Dark background
- Pull quote: *"Within 30 minutes of conversation, one signal reveals whether a business has structural clarity problems: the inability to answer basic questions about their own operation."*
- Supporting paragraph on diagnostic approach

#### Section 5 — CTA Band

---

### PAGE 6: Results / Client Stories (results.html)

**Purpose:** Social proof. Let outcomes speak.

#### Section 1 — Page Hero
Title: "Results"  
Subtitle: "What happens when you stop guessing and start diagnosing."

#### Section 2 — Client Outcomes
- Light background
- Card layout, one card per story
- Each card: Industry/type label | Challenge summary | What KSS did | Outcome (bold)
- Include:
  - Nonprofit: recurring revenue channels (Kroger/Amazon Smile), still generating donations years later
  - Nonprofit: event secured space, food, volunteers, funding within one week
  - Boutique clothing: plus-size demographic repositioning, new marketing channel opened
  - General: [placeholder card] "Your story here — results are added as engagements complete"

#### Section 3 — Testimonials
- Dark background
- Two testimonial quotes (formatted as large pull quotes):
  - *"She provided me feedback on messaging and branding for my style room which has helped tremendously in marketing to a demographic of clients that is largely overlooked."* — Renata Wallace, CEO, RW Couture
  - *"She helps you get completely clear on your vision."* — [Client, KSS]
  - Note: add `<!-- ADD TESTIMONIAL -->` comment placeholder for easy additions

#### Section 4 — CTA Band

---

### PAGE 7: Workshops (workshops.html)

**Purpose:** Present workshop offerings. Capture interest/inquiries even for workshops not yet publicly scheduled.

#### Section 1 — Page Hero
Title: "Workshops & Training"  
Subtitle: "Systematic thinking is a skill. We teach it."

#### Section 2 — Workshop Philosophy
- Light background
- Short section: KSS workshops aren't lectures. They're structured experiences designed to change how participants approach problems — not just give them new information.
- Methodology note: Built on 30+ years of workshop development and facilitation.

#### Section 3 — Current Workshops
**Workshop Card 1: AI-Powered Career Strategy**
- Who it's for: Professionals navigating job searches, career pivots, or re-entry
- What you'll learn: How to systematically use AI tools for resume building, application strategy, and interview preparation — without losing your voice or your judgment
- Format: [Half-day / Full-day / Virtual — TBD]
- Status badge: "Enrolling Soon" (styled as a pill badge in `--color-purple-mid`)
- CTA: "Get Notified" → /contact.html with subject pre-filled

**Workshop Card 2: Systematic Thinking & Critical Analysis**
- Who it's for: Teams, organizations, and educators who need better problem-solving frameworks
- What you'll learn: The KSS diagnostic method applied to organizational challenges — how to ask better questions, identify root causes, and build execution plans that hold
- Format: [Half-day / Full-day / Custom — contact for details]
- Status badge: "Available Now"
- CTA: "Request a Proposal" → /contact.html

#### Section 4 — Custom Workshops
- Dark background
- "Need something built for your team or organization? KSS designs custom workshop experiences around your specific challenges. Contact us to discuss scope and format."
- CTA: "Start the Conversation" → /contact.html

#### Section 5 — CTA Band

---

### PAGE 8: Career Development (career-development.html)

**Purpose:** Serve professionals seeking career strategy support.

#### Section 1 — Page Hero
Title: "Career Development"  
Subtitle: "Strategic job search is a system. Let's build yours."

#### Section 2 — The Problem
- Same diagnostic approach: most people approach job searching reactively, without a strategy, relying on volume over targeting.

#### Section 3 — What KSS Offers
- Resume strategy and targeted positioning
- AI tool integration for job search efficiency
- Interview preparation using systematic frameworks
- Career pivot strategy and narrative development

#### Section 4 — CTA Band

---

### PAGE 9: Writing Services (writing-services.html)

**Purpose:** Serve authors and professionals seeking writing development.

#### Section 1 — Page Hero
Title: "Writing Services"  
Subtitle: "Your voice is already there. Let's sharpen it."

#### Section 2 — Services
- Writing coaching (one-on-one)
- Craft workshops (character development, narrative structure, voice)
- Manuscript feedback and development support

#### Section 3 — Background Note
- KD King is a published fiction author (self-published and traditionally published) with expertise in character development and narrative structure.

#### Section 4 — CTA Band

---

### PAGE 10: Work With Me / Booking (work-with-me.html)

**Purpose:** Primary conversion page. All CTAs across the site point here.

#### Section 1 — Page Hero
Title: "Work With Me"  
Subtitle: "The first conversation is free. It's always diagnostic."

#### Section 2 — What to Expect
- Light background
- Three-step flow:
  - **Book a 30-minute call** — No pitch, no pressure. Just a real conversation about where you are and where you're stuck.
  - **We diagnose together** — I ask questions. You answer honestly. We figure out what's actually in the way.
  - **You decide** — If there's a fit, we discuss next steps. If not, you leave with clarity anyway.

#### Section 3 — Booking Embed
- Dark section
- Large centered headline: "Book Your Diagnostic Call"
- Subtext: "30 minutes. Free. Honest."
- Large CTA button: "Schedule Now" → `YOUR_GOOGLE_BOOKING_LINK` (owner replaces this)
- Note below button: "Prefer email? Reach out at [your email]"

#### Section 4 — Other Ways to Engage
- Services overview links (for people not ready to book)
- Workshops inquiry link

---

### PAGE 11: Contact (contact.html)

**Purpose:** Catch-all for inquiries that aren't booking calls.

#### Section 1 — Page Hero
Title: "Contact"  
Subtitle: "Ask a question. Request a proposal. Start a conversation."

#### Section 2 — Contact Form
- Fields: Name | Email | What type of inquiry? (dropdown: General | Consulting | Workshop | Career Development | Writing | Press/Speaking) | Message
- Submit via Formspree
- Confirmation message on submit: "Got it. KD will be in touch within 2 business days."

#### Section 3 — Direct Info
- Email address (placeholder — owner fills in)
- Link back to booking page: "Ready to book a call directly? → Schedule here"

---

## 6. SEO & METADATA

Each page should include:
```html
<meta name="description" content="[Page-specific, 150 chars max]">
<meta property="og:title" content="[Page title] | King Strategic Solutions">
<meta property="og:description" content="[Same as meta description]">
<meta property="og:url" content="https://kdking.business/[page]">
<title>[Page Title] | King Strategic Solutions</title>
```

Homepage meta description:  
*"King Strategic Solutions helps solopreneurs, small businesses, and nonprofits diagnose what's broken and build a clear path forward. Strategic consulting by KD King."*

---

## 7. ACCESSIBILITY & PERFORMANCE

- All images must have descriptive `alt` text
- Color contrast must meet WCAG AA (verify purple on dark backgrounds)
- Nav must be keyboard-navigable
- Use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- No JavaScript required for content — JS is enhancement only
- Fonts load with `font-display: swap`
- No external dependencies beyond Google Fonts and Formspree

---

## 8. PLACEHOLDER TOKENS

Replace these before going live:

| Token | Replace With |
|---|---|
| `YOUR_GOOGLE_BOOKING_LINK` | Google Calendar appointment scheduling URL |
| `YOUR_FORM_ID` | Formspree form ID |
| `[your email]` | Business email address |
| `[Client, KSS]` | Client name/title if available |
| Workshop format fields | Confirmed format/dates when available |

---

## 9. BUILD ORDER (RECOMMENDED)

1. style.css — full design system, all variables, global components
2. main.js — mobile nav, scroll effects, active nav state
3. index.html — homepage (highest priority, most complex)
4. process.html — methodology page (second priority, key differentiator)
5. work-with-me.html — booking page (primary CTA destination)
6. about.html
7. services.html
8. strategic-consulting.html
9. results.html
10. workshops.html
11. career-development.html
12. writing-services.html
13. contact.html

---

## 10. SESSION PROMPT (USE THIS TO START EACH BUILD SESSION)

Copy and paste the following at the start of any Claude or Antigravity build session:

---

> I am building a website for King Strategic Solutions (KSS), a strategic consulting practice led by KD King. I have a complete development brief that defines the design system, all page specs, content, components, and deployment setup. The site is pure HTML/CSS/JS, hosted on Hostinger via GitHub. 
>
> My design system uses these primary colors: dark background #332445, primary purple accent #7b2d8e, deep purple #663399, light purple #c6b8d3, near-white #f0edef. Typography: Playfair Display for headlines, Poppins for body, Alex Brush for accent/tagline. Aesthetic: refined authority — dark and structured, not warm and friendly.
>
> Today I need you to build: [SPECIFY PAGE OR COMPONENT].
>
> Rules:
> - Output clean, deployable HTML/CSS/JS only
> - Use the exact colors and fonts specified
> - No frameworks, no build tools, no npm
> - All CSS in style.css (shared), page-specific overrides inline in `<style>` if needed
> - One HTML file per page
> - Follow the content specs in my brief exactly — don't improvise copy
> - Flag any placeholders with the token format `YOUR_[NAME]` for me to replace
>
> Here is the brief section for [PAGE NAME]: [PASTE RELEVANT PAGE SPEC FROM BRIEF]

---

*End of Brief — Version 1.0*
