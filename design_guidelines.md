# Galaxy Tires Trading FZE - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from premium automotive and B2B commerce leaders (Mercedes-Benz, Tesla showrooms, Shopify) combined with enterprise trust patterns. This creates a sophisticated, brand-forward experience that balances visual impact with credibility.

## Core Design Principles
1. **Premium Automotive Aesthetic**: Clean, sophisticated layouts that reflect the quality of global brands represented
2. **Trust & Credibility**: Corporate professionalism for B2B audience with clear information hierarchy
3. **Brand Showcase**: Visual-first approach highlighting 8 premium tyre brands with equal prominence
4. **Bilingual Excellence**: Seamless RTL/LTR transitions maintaining design integrity in both languages

## Typography System
- **Hero Headlines**: Bold, 4xl to 6xl (responsive), heavy weight (700-800)
- **Section Titles**: 3xl to 4xl, semibold (600)
- **Body Text**: lg (18px) for readability, regular weight (400)
- **UI Elements**: base to sm, medium weight (500)
- **Arabic Typography**: Ensure slightly larger sizes (+2-4px) for readability, maintain same hierarchy

## Layout & Spacing
**Spacing Primitives**: Use Tailwind units of **4, 8, 12, 16, 20** for consistency
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component gaps: gap-8 to gap-12
- Card padding: p-6 to p-8
- Container: max-w-7xl with px-4 to px-8

**Grid System**:
- Brand showcase: 4 columns desktop (grid-cols-4), 2 mobile (grid-cols-2)
- Product categories: 3 columns desktop, 1 mobile
- Feature cards: 2-4 columns depending on content

## Component Library

### Navigation
- Fixed header with glass-morphism effect on scroll
- Logo left, navigation center, language toggle + CTA right
- Mobile: Hamburger menu with slide-in drawer
- RTL: Flip entire layout horizontally

### Hero Section (Home)
- **Full-width image slider** (3-5 rotating banners)
- Height: 85vh on desktop, 70vh mobile
- Overlay: gradient overlay for text readability
- Content: Centered, max-w-3xl with headline + subtitle + dual CTAs
- Slider controls: Dots bottom center, arrows on sides
- **Image specs**: High-quality tyre/road/warehouse scenes, 1920x1080px minimum

### Brand Showcase Section
- **8 brand logo cards** in responsive grid
- Each card: Logo image + brand name, subtle hover lift effect
- Background: Subtle card containers with border accents
- **Logo images**: Official brand logos on transparent backgrounds

### Product Categories (Services Page)
- **Large category cards** with full-bleed images
- Image: Top half of card, tyre category photo
- Content: Bottom half with title + description + "Learn More" link
- **Category images**: Professional tyre photos (passenger car, SUV, light truck)

### Why Choose Us (Home)
- 4 feature cards in 2x2 grid (mobile: stack)
- Icon top, title, description below
- Subtle background differentiation per card

### About Sections
- Split layouts: 60/40 text-to-image ratio
- Vision/Mission/Purpose: Alternating image-text sides
- **Images needed**: Office/warehouse facility, team photos, handshake/partnership imagery

### Image Gallery Slider
- Multi-purpose carousel for brand highlights, products, certifications
- 3-4 visible slides, auto-play with pause on hover
- Navigation arrows + pagination dots

### Contact Form
- Two-column layout: Form left (60%), contact info + map right (40%)
- Form inputs: Full-width with proper spacing (mb-4)
- Submit button: Full-width on mobile, auto on desktop

### Footer
- Three columns: Company info, Quick links, Contact details
- Brand logos strip above footer content
- Copyright + social icons at bottom

## Animation Strategy (Framer Motion)
**Subtle and Professional** - avoid over-animation:
- Page transitions: Fade in content on mount
- Scroll reveals: Fade up elements as they enter viewport (stagger children)
- Hero slider: Smooth crossfade transitions (4-second intervals)
- Card hovers: Slight lift (translateY(-4px)) with smooth transition
- Button hovers: Scale 1.02 with subtle glow
- Navigation: Smooth slide-in for mobile menu
- **No**: Excessive parallax, distracting micro-interactions, flashy effects

## Images Strategy

### Required Images Throughout Site:

**Home Page**:
- Hero slider: 3-5 banner images (tyres, roads, warehouse, brands)
- Why Choose Us: 4 icon/background images
- Brand showcase: 8 brand logos
- CTA section background image

**About Page**:
- Company overview: Warehouse/office photo
- Vision section: Road/journey imagery
- Mission section: Handshake/partnership photo
- Team/facility: 2-3 interior/team photos

**Services Page**:
- Category cards: 3 large tyre product images (passenger, SUV, truck)
- Brand detail section: 8 brand logos repeated with product context
- Gallery slider: 5-8 product showcase images

**Contact Page**:
- Office location image
- Map placeholder
- Background image for contact section

**Image Guidelines**:
- Use placeholder service: https://placehold.co/[width]x[height]
- Hero images: 1920x1080
- Category cards: 800x600
- Brand logos: 300x150 (maintain aspect ratio)
- Gallery slides: 1200x800
- All images: Organize in /public/images/[section]/ folders with descriptive names

## RTL (Arabic) Considerations
- Flip entire layout using `dir="rtl"` on html element
- Navigation: Logo right, menu left, language toggle left
- Text alignment: Right-aligned for Arabic
- Sliders: Reverse arrow directions
- Maintain visual hierarchy and spacing consistency
- Test all animations work correctly in RTL

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full multi-column layouts)
- XL: > 1280px (max-w-7xl constraint)

This design creates a premium, trustworthy B2B platform that showcases Galaxy Tires' partnership with global brands while maintaining professional credibility and excellent UX in both English and Arabic.