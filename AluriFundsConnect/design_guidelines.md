# Design Guidelines for ALURI Srinivas Financial Services Website

## Design Approach
**Hybrid Approach**: Drawing from established financial platforms like Zerodha and Groww for modern Indian fintech aesthetics, combined with traditional financial service trust elements from Vanguard and Fidelity. This creates a professional, trustworthy presence while maintaining modern accessibility.

**Core Principles**:
- Trust through clarity and professionalism
- Information hierarchy that guides decision-making
- Credibility through established visual patterns
- Accessibility for diverse age groups (25-65 years)

## Typography System

**Font Families** (Google Fonts):
- Primary: Inter (headings, navigation, buttons) - Weights: 400, 500, 600, 700
- Secondary: IBM Plex Sans (body text, descriptions) - Weights: 400, 500
- Accent: Poppins (hero headlines, business cards) - Weights: 600, 700

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Page Titles: text-4xl md:text-5xl, font-semibold
- Section Headings: text-3xl md:text-4xl, font-semibold
- Subsection Titles: text-2xl md:text-3xl, font-medium
- Card Titles: text-xl font-semibold
- Body Large: text-lg
- Body Standard: text-base
- Body Small: text-sm
- Caption/Meta: text-xs

## Layout System

**Spacing Units**: Consistent use of Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24

**Grid & Containers**:
- Max container width: max-w-7xl
- Content sections: max-w-6xl
- Text-heavy sections: max-w-4xl
- Section padding vertical: py-16 md:py-24 lg:py-32
- Section padding horizontal: px-4 md:px-6 lg:px-8
- Card spacing: gap-6 md:gap-8
- Component internal padding: p-6 md:p-8

**Responsive Breakpoints**:
- Mobile-first approach
- Business cards: 1 column mobile, 2-3 columns tablet/desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Service features: 1 column mobile, 2 columns tablet, 3-4 columns desktop
- AMC logos grid: 3 columns mobile, 4-6 columns tablet, 8-10 columns desktop

## Images

**Hero Section**: Large professional hero image (80vh) showing Indian professional consulting with clients or abstract financial growth imagery with gradient overlay (opacity-20 to opacity-40) for text legibility. Place business name and tagline overlaid with blurred background buttons.

**Business Card Backgrounds**: Subtle geometric patterns or abstract financial motifs (graphs, growth arrows) with low opacity (opacity-5 to opacity-10)

**Service Section Icons**: Use Heroicons for all service icons - keep consistent stroke-width

**AMC Logos**: Real AMC partner logos in grid format, grayscale with hover effect to reveal brand colors

**Trust Indicators**: Professional headshot placeholder for ALURI Srinivas in About/Contact sections, certification badges, regulatory compliance logos

## Component Library

### Navigation
**Desktop Header**:
- Sticky navigation: sticky top-0 with backdrop-blur-md
- Logo left, navigation center, CTA button right
- Navigation links: text-base font-medium with underline-on-hover
- Height: h-20

**Mobile Navigation**:
- Hamburger menu with slide-in drawer
- Full-screen overlay navigation

### Business Card Templates (3 Variations)

**Template 1 - Modern Professional**:
- Clean rectangular card with subtle shadow (shadow-xl)
- Left border accent strip (w-2)
- Name: text-2xl font-bold
- Title/Designation: text-lg font-medium
- Services list: text-sm with bullet points
- Contact info with icons: Phone, Email, Address
- Downloadable/Shareable button at bottom

**Template 2 - Classic Elegant**:
- Rounded corners (rounded-xl)
- Centered layout with divider lines
- Formal typography hierarchy
- Embossed effect with subtle gradients
- Badge-style service tags
- QR code integration in corner

**Template 3 - Contemporary Minimal**:
- Asymmetric layout with photo on left
- Bold typography for name
- Icon-based service representation
- Floating contact buttons
- Glassmorphism card effect (backdrop-blur)

### Service Showcase Cards
- Card container: rounded-xl with shadow-lg hover:shadow-2xl transition
- Icon container: w-16 h-16 rounded-full with subtle background
- Title: text-xl font-semibold mb-4
- Description: text-base leading-relaxed
- CTA link: "Learn More" with arrow icon
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

### AMC Partner Grid
- Logo containers: Consistent sizing (h-24 w-32)
- Grayscale filter on default, full color on hover
- Grid: grid-cols-3 md:grid-cols-6 lg:grid-cols-10
- Padding: p-4
- Background: Subtle border (border border-gray-200)

### Contact Form
- Two-column layout desktop (form left, info right)
- Single column mobile
- Input fields: Consistent height h-12, rounded-lg, with focus:ring states
- Service selector: Dropdown with all service categories
- Large textarea for message: h-32
- Submit button: w-full on mobile, w-auto on desktop
- Form validation indicators

### Trust Section
- Certification badges in row: grid-cols-2 md:grid-cols-4
- Client testimonial cards: 2 columns desktop
- Years of experience counter
- Satisfied clients statistics

### Footer
- Three-column layout: Services | Quick Links | Contact
- Newsletter signup inline form
- Social media icons (if applicable)
- Regulatory disclaimers and compliance text
- Copyright notice

## Page Structure

**Homepage Flow**:
1. Hero with professional image (80vh) - Name, tagline, primary CTA
2. Digital Business Cards Section (py-20) - 3 template showcases with download options
3. Services Overview (py-24) - 4-column grid: Mutual Funds, General Insurance, Motor Insurance, Life Insurance
4. AMC Partners Section (py-20) - "Partnered with Leading AMCs" grid display
5. Why Choose Us (py-24) - Trust indicators, experience, certifications
6. Contact CTA Section (py-16) - Prominent contact form with info sidebar
7. Footer (py-12)

**Mutual Funds Page**:
- Hero banner with breadcrumb
- AMC partners comprehensive grid
- Fund categories section
- Investment process timeline
- Calculator/estimator tool
- Contact specialist CTA

**Insurance Services Pages**:
- Service-specific hero
- Coverage types cards
- Benefits comparison table
- Claims process steps
- Get Quote form

## Interactive Elements

**Buttons**:
- Primary CTA: px-8 py-4 rounded-lg text-lg font-semibold with subtle shadow
- Secondary: Outlined variant with hover fill
- Text links: Underline on hover with transition
- Icon buttons: Consistent sizing p-3 rounded-full

**Cards**: 
- Hover lift effect: hover:-translate-y-2 transition-transform duration-300
- Shadow depth change: shadow-md hover:shadow-xl

**Form States**:
- Focus rings with brand accent
- Error states with red border and message below
- Success states with green checkmark
- Loading states for form submission

**Animations**: Minimal and purposeful
- Smooth scroll behavior
- Fade-in on scroll for sections (intersection observer)
- Hover transitions: duration-200 to duration-300
- No distracting parallax or complex animations

## Accessibility

- ARIA labels for all interactive elements
- Keyboard navigation support
- Focus indicators clearly visible (ring-2 ring-offset-2)
- Sufficient contrast ratios (WCAG AA minimum)
- Form labels properly associated
- Alt text for all images
- Semantic HTML structure (header, nav, main, section, footer)

This design creates a professional, trustworthy financial services platform that effectively showcases ALURI Srinivas's comprehensive offerings while providing practical tools like downloadable business cards and clear service information.