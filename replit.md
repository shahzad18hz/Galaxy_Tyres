# Galaxy Tires Trading FZE - Premium Tire Distribution Platform

## Overview

Galaxy Tires Trading FZE is a UAE-based B2B tire trading company serving as the official partner of Forceland Tyres and distributor of 8 premium global brands (Michelin, Bridgestone, Continental, Hankook, Pirelli, Dunlop, Yokohama, and Forceland). The application is a bilingual (English/Arabic) marketing and information website built with modern web technologies, featuring a premium automotive aesthetic designed to showcase tire products and build trust with B2B customers.

The platform emphasizes visual-first design with hero banners, brand showcases, and product category displays, while maintaining full RTL/LTR language support and responsive layouts for optimal viewing across devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite as the build tool

**Routing**: Wouter for client-side navigation with the following page structure:
- Home (`/`) - Hero sliders, brand showcase, feature highlights
- About (`/about`) - Company overview, vision, mission, purpose
- Services (`/services`) - Product categories and brand listings
- Contact (`/contact`) - Contact form and business information

**UI Component System**: Shadcn/ui (New York style) with Radix UI primitives
- Comprehensive component library including buttons, cards, forms, dialogs, navigation menus
- Custom theme configuration with CSS variables for light/dark mode support
- Tailwind CSS for utility-first styling with custom design tokens

**State Management**:
- React Context API for language/internationalization (`LanguageContext`)
- TanStack Query (React Query) for server state management
- Local component state with React hooks

**Animation & Interactivity**:
- Framer Motion for page transitions and component animations
- Embla Carousel for hero image sliders
- Responsive design with mobile-first approach

**Internationalization**:
- Custom bilingual system supporting English and Arabic
- RTL (Right-to-Left) layout support with directional CSS
- Content managed through structured context with translations for all UI elements
- Dynamic font sizing adjustments for Arabic typography

**Design System**:
- Premium automotive aesthetic drawing from Mercedes-Benz, Tesla showroom patterns
- Typography hierarchy: Hero headlines (4xl-6xl), section titles (3xl-4xl), body text (lg)
- Spacing system using Tailwind units (4, 8, 12, 16, 20)
- Grid layouts: 4-column brand showcase (desktop), responsive breakpoints
- Glass-morphism effects on scrolled header
- Hover elevation effects on interactive elements

### Backend Architecture

**Runtime**: Node.js with Express.js framework

**API Structure**: RESTful API design (routes prefixed with `/api`)
- Minimal backend implementation serving primarily as API proxy
- Routes defined in `server/routes.ts`
- Request/response logging middleware with performance tracking

**Build Process**:
- Development: `tsx` for TypeScript execution with hot reload
- Production: ESBuild for server bundling, Vite for client bundling
- Single-command deployment with `npm run build`

**Storage Layer**:
- In-memory storage implementation (`MemStorage` class) for development
- Interface-based design (`IStorage`) allowing easy swap to persistent storage
- User management CRUD operations (currently minimal schema)

**Server-Side Rendering**: Vite SSR middleware in development mode for optimal DX

### Data Storage Solutions

**Current Implementation**: In-memory storage with Map-based data structures

**Database Schema** (Drizzle ORM):
- PostgreSQL dialect configured
- User table with UUID primary keys, username/password fields
- Schema location: `shared/schema.ts`
- Drizzle Zod integration for runtime validation

**Migration Strategy**: Drizzle Kit configured for schema migrations to `./migrations` directory

**Connection**: Neon serverless PostgreSQL driver configured but not yet actively used (DATABASE_URL environment variable required for production)

### Authentication and Authorization

**Current State**: Minimal authentication infrastructure
- User schema defined with username/password fields
- No active authentication middleware implemented
- Session management dependencies installed (`connect-pg-simple`)

**Future Implementation Ready**: 
- Session store configuration prepared for PostgreSQL
- User CRUD operations available through storage interface

### External Dependencies

**UI Component Libraries**:
- Radix UI: Comprehensive primitive component library (accordion, dialog, dropdown, select, tooltip, etc.)
- Shadcn/ui: Pre-built accessible components built on Radix
- Lucide React: Icon library for consistent iconography

**Styling & Design**:
- Tailwind CSS: Utility-first CSS framework
- Class Variance Authority: Component variant management
- Framer Motion: Animation library
- Embla Carousel: Touch-friendly carousel component

**Forms & Validation**:
- React Hook Form: Form state management
- Zod: Schema validation
- @hookform/resolvers: Integration between React Hook Form and Zod

**Data Fetching**:
- TanStack Query: Async state management and caching
- Built-in fetch API for HTTP requests

**Database & ORM**:
- Drizzle ORM: TypeScript ORM for PostgreSQL
- @neondatabase/serverless: Serverless PostgreSQL driver
- Drizzle Zod: Schema to Zod validator conversion

**Development Tools**:
- Vite: Fast build tool and dev server
- TypeScript: Type safety across the stack
- ESBuild: JavaScript bundler for production
- PostCSS with Autoprefixer: CSS processing

**Third-Party Services** (Not Yet Integrated):
- Email service provider (for contact form submissions)
- CDN for static asset delivery (hero images, brand logos)
- Analytics platform (recommended for B2B traffic insights)

**Asset Management**:
- Static assets in `attached_assets/` directory
- Generated images for hero banners, product shots, brand logos
- Vite alias configuration for easy asset imports (`@assets`)

**Hosting Requirements**:
- Node.js runtime environment
- PostgreSQL database (Neon serverless recommended)
- Environment variables: `DATABASE_URL`, `NODE_ENV`