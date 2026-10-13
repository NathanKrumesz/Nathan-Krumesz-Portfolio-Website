# Design System & Visual Specification: Nathan Krumesz Portfolio

## 1. Aesthetic Direction & Brand Identity

The Nathan Krumesz performance marketing portfolio merges two distinct, world-class design languages:
1. **The LearnMoss Organic Texture System (`learnmoss.com`)**:
   - Giant floating rounded containers (`rounded-[32px]` to `rounded-[48px]`) set within crisp, gallery-grade off-white viewport margins.
   - Radiant moss-field gradient blends: deep boreal forest greens, warm sunlit amber ochre, alpine mist, and midnight obsidian spruce.
   - High-contrast silver-halide film grain texture with visible particulate speckles, mimicking high-ISO 35mm analog film stock.
   - Optical vignette layers creating tactile depth and studio illumination.
2. **The Doe Media Motion & Editorial System (`doemedia.com`)**:
   - Natural scroll-coupled 3D perspective tilts and parallax translation on featured case study cards.
   - Editorial serif italic highlights (`Instrument Serif`) contrasted against precision grotesque sans-serif (`Inter`) and technical monospace brackets (`JetBrains Mono`).
   - Clean, zero-pill metadata discipline and high-contrast numerical proof points.

---

## 2. Grain & Texture Engine

### 2.1 The LearnMoss High-Contrast Film Grain
Unlike standard digital noise that washes out into a low-contrast neutral-gray haze, the LearnMoss grain style utilizes a dual-layer analog transfer:

#### Layer 1: Primary High-Contrast Silver-Halide Grain (`.hero__grain`)
- **Generator**: Scalable SVG `feTurbulence` fractal noise.
- **Frequency**: `baseFrequency="0.78"` with `numOctaves="4"` for multi-scale grain clustering.
- **Contrast Expansion Matrix**:
  ```xml
  <feColorMatrix type="matrix" values="
    3.2  0    0    0   -1.1
    0    3.2  0    0   -1.1
    0    0    3.2  0   -1.1
    0    0    0    1    0
  "/>
  ```
  *Rationale*: Expands the narrow standard deviation of procedural noise (~0.45–0.55) across the full dynamic range (0.0 to 1.0), generating crisp, pin-sharp dark and light grains.
- **Blending**: `mix-blend-mode: overlay;` at `opacity: 0.52;`
- **Tile Sizing**: `180px 180px` (optimized for crisp Retina/High-DPI rendering without moiré banding).

#### Layer 2: Micro-Stipple Particulate Layer (`.hero__grain-stipple`)
- **Generator**: Fine-grain SVG noise.
- **Frequency**: `baseFrequency="0.92"` with `numOctaves="3"`.
- **Blending**: `mix-blend-mode: hard-light;` at `opacity: 0.16;` with `140px 140px` tile size.
- **Purpose**: Injects high-frequency micro-dust and analog texture into deep shadows and highlights.

### 2.2 Optical Vignette & Rim Shading (`.hero__vignette`, `.cta__vignette`)
- Dual-gradient overlay:
  ```css
  background:
    radial-gradient(ellipse at 50% 50%, transparent 38%, rgba(0, 0, 0, 0.44) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, transparent 26%, transparent 72%, rgba(0, 0, 0, 0.38) 100%);
  ```
- Softens container perimeters while intensifying saturation in the luminous core.

---

## 3. Color Tokens & Gradient Maps

### 3.1 Organic Moss Color Palette
| Token | Hex | Role / Application |
|---|---|---|
| `--grad-forest` | `#183611` | Deep woodland base tone, anchor for radial blooms |
| `--grad-olive` | `#5F721C` | Luminous golden-green field tone |
| `--grad-amber` | `#DDA239` | Radiant sunlit ochre flare |
| `--grad-sky` | `#84ADD1` | Atmospheric alpine morning sky reflection |
| `--grad-mist` | `#BED0DF` | Diffuse cloud/fog highlight |
| `--grad-night` | `#092428` | Obsidian spruce foundation and shadow anchor |

### 3.2 Gradient Radial Blob Compositions
- **Hero Canvas (`.hero__gradient`)**:
  - `radial-gradient(46% 54% at 16% 22%, #183611 0%, transparent 70%)`
  - `radial-gradient(42% 48% at 84% 18%, #dda239 0%, transparent 68%)`
  - `radial-gradient(50% 52% at 86% 52%, #84add1 0%, transparent 70%)`
  - `radial-gradient(44% 54% at 18% 80%, #bed0df 0%, transparent 72%)`
  - `radial-gradient(58% 58% at 72% 86%, #092428 0%, transparent 70%)`
  - Base tone: `#5f721c` with `filter: blur(48px) saturate(1.22)`
- **Closing CTA Canvas (`.cta__gradient`)**:
  - Harmonized with hero coordinates, calibrated for central form contrast.
  - Smooth 36s-40s ambient translation drift (`@keyframes drift`) with `prefers-reduced-motion` fallbacks.

---

## 4. Container Architecture (Floating Island Framing)

Both the **Hero** and the **Closing CTA** adhere to the LearnMoss floating island pattern:
- **Geometry**: Generous organic radii (`rounded-[32px] sm:rounded-[44px] lg:rounded-[48px]`).
- **Margins**: Outer margin inset from browser viewport edges (`px-3 sm:px-6 lg:px-8`).
- **Border Specular Highlight**: `border border-white/15` with subtle top highlight.
- **Elevation**: `shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5)]` for genuine spatial separation above the white canvas.

---

## 5. Typographic Hierarchy

1. **Display Headings**:
   - Font: `Inter` (sans-serif, font-normal / font-medium, tight letter tracking `-0.035em`).
   - Editorial Emphasis: `Instrument Serif` italic badges (`real-world results`, `growth engine?`, `I've grown`).
2. **Metadata & Monospace Labels**:
   - Font: `JetBrains Mono` (uppercase, letter-spaced, bracketed: `[ DIGITAL MARKETING SPECIALIST ]`).
3. **Body & Metrics**:
   - Font: `Inter` with high-contrast text treatments and unboxed metadata separators (`·`).

---

## 6. Motion & Interaction Rules

1. **Natural Scroll-Coupled Animation**:
   - Doe Media-style case study cards dynamically calculate tilt pitch and vertical scrub based strictly on natural page scroll via `IntersectionObserver` and `requestAnimationFrame`.
   - No interactive preview selectors or visitor controls.
2. **Zero-Pill Discipline**:
   - Informational tags and categories remain unboxed clean text or bracketed monospace identifiers.
   - Clean, purposeful micro-interactions with visible focus states and WCAG AA contrast.

---

## 7. Brand Identity & Logo Architecture

### 7.1 Typographic Hybrid Wordmark Specification
In adherence to the editorial Doe Media and LearnMoss design language, the portfolio brand identifier is a pure typographic wordmark featuring an intentional lowercase hybrid font pairing:
1. **Core Typographic Composition**:
   - **`nathan`**: All lowercase, set in **Inter Bold / Semibold** with tight editorial tracking (`-0.035em`), directly mirroring the headline font weight used in *"Some of the brands"*.
   - **`krumesz`**: All lowercase, set in **Instrument Serif Italic** (`font-serif italic font-normal`) with optical x-height scaling (`1.12em`), directly mirroring the elegant cursive serif flair used in *"I've grown."*.
   - Pure typography: No artificial geometric graphics, squircle badges, or decorative clip-art icons.
2. **Design Rationale & Aesthetic Impact**:
   - The contrast between the grounded, high-precision boldness of `nathan` and the lyrical, high-fashion editorial cursive flow of `krumesz` creates an immediate signature lockup reminiscent of luxury design houses, avant-garde studios, and modern creative directors.
   - It honors the exact typographic hierarchy established across the page headers, unifying the site's brand presence.
3. **Responsive Adaptability**:
   - **Navigation Bar (`Navbar.tsx`)**: Full `nathan krumesz` wordmark dynamically adapting contrast (`text-white` over dark hero backdrop, `text-[#0A0A0A]` over scrolled glass).
   - **Footer (`Footer.tsx`)**: Full wordmark paired with subtle monospace descriptor `Digital Marketing Specialist • Toronto, ON`.
   - **Modals & Badges (`ResumeModal.tsx`)**: Compact `nathan krumesz` mark with clean monospace divider.
   - **Browser Favicon (`index.html`)**: Sleek dark badge carrying lowercase `n` (bold sans) and `k` (italic serif).
