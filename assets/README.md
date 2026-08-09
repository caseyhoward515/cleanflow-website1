# CleanFlow of Ohio — asset manifest

Every image the site renders is listed here with its ownership or licensing
basis. If an asset is not in this file, it should not be on the site.

## Principle

The site renders **no externally hosted imagery**. Every visual asset is either
tracked in this directory or drawn with CSS. That removes three classes of risk
at once: another party's server disappearing or blocking hotlinks, an unclear
copyright position, and photographs of unknown provenance being read as
CleanFlow's own work.

Where an authentic CleanFlow photograph is not available, the site uses a
branded media panel (`.brand-media` in `style.css`) rather than a stand-in
photograph. These panels are honest by construction: they present a service
name and icon, and never imply a job result.

## Tracked assets

| Path | Type | Size | Ownership / licence | Used by |
| --- | --- | --- | --- | --- |
| `assets/brand/cleanflow-mascot.png` | PNG, 820x365, RGBA | ~275 KB | **Owner-approved CleanFlow of Ohio artwork**, supplied by the owner. This is the company's official mascot and logo lockup. Cropped to its content box and downscaled from the 1536x1024 original; artwork itself is unaltered. | Default social-preview source |
| `assets/og-image.png` | PNG, 1200x630 | ~454 KB | Layout and typography are original work for CleanFlow of Ohio; the brand mark within it is the owner's mascot lockup above. Rendered from `assets/brand/og-image.source.html`. Typeface: Liberation Sans (SIL Open Font License 1.1). | Default `og:image` and `twitter:image` for home, services, and about |
| `assets/og-seamless-gutter-installation.png` | PNG, 1200x630 | ~403 KB | **Owner-approved, AI-assisted CleanFlow of Ohio page-specific promotional artwork**, refined under the owner's direction from an approved social-preview concept. The Ohio hat emblem was corrected against cartographic boundary references. | Page-specific `og:image` and `twitter:image` for `/services/gutter-installation` |
| `assets/og-gutter-cleaning.png` | PNG, 1200x630 | ~685 KB | **Owner-approved, AI-assisted CleanFlow of Ohio page-specific promotional artwork**, using the owner's approved mascot and gutter-cleaning visual direction. | Page-specific `og:image` and `twitter:image` for `/services/gutter-cleaning` |
| `assets/og-dryer-vent-cleaning.png` | PNG, 1200x630 | ~700 KB | **Owner-approved, AI-assisted CleanFlow of Ohio page-specific promotional artwork**, using the owner's approved mascot and dryer-vent-cleaning visual direction. | Page-specific `og:image` and `twitter:image` for `/services/dryer-vent-cleaning` |
| `assets/og-underground-drainage.png` | PNG, 1200x630 | ~700 KB | **Owner-approved, AI-assisted CleanFlow of Ohio page-specific promotional artwork**, using the owner's approved mascot and underground-drainage visual direction. | Page-specific `og:image` and `twitter:image` for `/services/underground-downspout-drainage` |
| `assets/brand/hero-pattern.svg` | SVG, 1200x600 | ~2.0 KB | Original **decorative background texture** created for this site — abstract roofline, gutter run, and droplet motif. It is a pattern, not a brand mark, and is not used as a logo anywhere. | `#hero` and `.services-hero-wow` backgrounds in `style.css`; `/services/dryer-vent-cleaning` hero |
| `assets/brand/og-image.source.html` | HTML | ~4.5 KB | Build source for the social preview. Marked `noindex, nofollow`; not linked from the site. | Regenerating `og-image.png` |

## Brand mark policy

The only mark that represents CleanFlow of Ohio on this site is
`assets/brand/cleanflow-mascot.png`, which is the owner's own artwork.

No substitute, stand-in, or newly drawn logo may be introduced as the company's
mark. An earlier revision of this site briefly shipped an invented
droplet-and-channel emblem while the authentic file was unavailable; it has been
removed. If the mascot file is ever missing, use a plain CleanFlow of Ohio
text-and-pattern treatment and flag that the authentic artwork is needed —
do not draw a replacement mark.

`hero-pattern.svg` is a decorative background texture, not a mark, and is never
used in a logo position.

## Regenerating the social preview

`assets/og-image.png` is rendered from its HTML source with headless Chromium,
captured through the DevTools Protocol so the output is exactly 1200x630
(`--window-size` alone under-reports the layout viewport and leaves a white
band at the bottom).

Edit `assets/brand/og-image.source.html`, then re-render and confirm the header
reports `1200x630`. The source references `cleanflow-mascot.png` from the same
directory, so the preview always carries the owner's real mark.

## Contrast

Branded media panels place their label and icon on a `rgba(13, 27, 54, 0.58)` /
`0.42` scrim so contrast holds on every panel tint, including the orange dryer
and installation gradients. Measured worst cases: **7.32:1** for label text
(WCAG AA needs 4.5:1) and **5.07:1** for the icon glyph (WCAG 1.4.11 needs
3:1). Without the scrim, white-on-orange measured 2.19:1 and failed.

## Fonts and icons

| Dependency | Basis |
| --- | --- |
| Poppins (Google Fonts CDN) | SIL Open Font License 1.1 |
| Font Awesome Free 6.4.0 (jsDelivr) | Icons CC BY 4.0, CSS/JS MIT. Free tier only — no Pro glyphs are referenced. |
| Liberation Sans | SIL Open Font License 1.1. Used only inside the social-preview render; the glyphs are baked into the PNG. |

These are typography and icon dependencies, not imagery. See the runtime
dependency table in the root `README.md`.

## Removed imagery and why

Everything below was previously hotlinked from a third-party server. None of it
was CleanFlow's, and none of it is republished here.

| Former source | Where it appeared | Problem | Replacement |
| --- | --- | --- | --- |
| `nedstevens.com` | `#hero` and `.services-hero-wow` backgrounds; "Our Work" gallery | **Direct competitor's photograph**, including one of their staff presented as CleanFlow's work | `hero-pattern.svg` over a brand gradient; gallery rebuilt as proof-of-work cards |
| `cdn.prod.website-files.com` | Home service card, services detail, gutter-cleaning detail | Unidentified contractor's before/after, read as CleanFlow's result | `.brand-media` panels |
| `dlczb9lfz9r73.cloudfront.net` | Repairs and guards cards and details | Unidentified host; one filename indicates a **paid iStock licence held by someone else** | `.brand-media` panels |
| `images.squarespace-cdn.com` | "Our Work" gallery | Unidentified contractor's before/after presented as CleanFlow's result | Proof-of-work cards |
| `static.wixstatic.com` | "Our Work" gallery | Unidentified contractor's photograph | Proof-of-work cards |
| `i.ibb.co` | Installation hero mascot, installation before/after, installation `og:image` | Free anonymous image host with no retention guarantee; the before/after was unverified | Mascot now tracked locally as `cleanflow-mascot.png` (owner-supplied); before/after replaced with process cards; `og-image.png` |
| `images.pexels.com` | Installation card, dryer-vent detail, gutter-brightening detail | Licence was fine (Pexels licence), but each sat where it read as a CleanFlow result, and each was an external runtime dependency | `.brand-media` panels |
| `images.unsplash.com` | Dryer-vent hero background | Licence was fine (Unsplash licence); removed only to eliminate the last external image dependency. It sat behind an 85% overlay and was barely visible. | `hero-pattern.svg` over a brand gradient |

Pexels and Unsplash imagery was eligible to be retained. It was removed so the
"no external image hosts" guarantee is absolute rather than nearly true, and so
the visual system stays consistent now that the other panels are branded.

## Adding real CleanFlow photographs later

The branded panels are drop-in replaceable. To use a genuine job photograph:

1. Add the file under `assets/work/` (create the directory) at roughly 1200px
   wide, and record it in the table above with the property and date.
2. Replace the `.brand-media` element with an `<img>` carrying `loading="lazy"`,
   `decoding="async"`, explicit `width`/`height`, and alt text that describes
   what is actually shown.
3. Only describe a photograph as CleanFlow's work if it is.

Sections that would benefit most, in priority order:

1. **Proof-of-work cards on `/services`** — a real before/after pair from one
   job would do more for conversion than any other single image on the site.
2. **Gutter-cleaning detail panel on `/services/gutter-cleaning`** — the
   highest-intent page; a real downspout flow test in progress would be ideal.
3. **Installation section on `/services/gutter-installation`** — on-site
   roll-forming is visually distinctive and hard to fake.
4. **Home page service cards** — four real service shots would lift the whole
   page.
5. **Gutter brightening** — a genuine before/after is the only honest way to
   sell this, since the result is entirely visual.
