# 🇩🇪 Deutsch Lernen - German Language Learning Platform

A comprehensive German language learning application built with Next.js, featuring interactive lessons for all four key language skills (Reading, Writing, Listening, Speaking) across A1-B1 levels.

## ✨ Features

- **📚 Four Learning Skills**
  - 📖 **Lesen** (Reading) - Text comprehension and vocabulary
  - ✏️ **Schreiben** (Writing) - Grammar and composition
  - 🎧 **Hören** (Listening) - Audio comprehension
  - 🗣️ **Sprechen** (Speaking) - Pronunciation and conversation

- **📊 Three Proficiency Levels**
  - **A1**: Beginner - Getting started with German basics
  - **A2**: Elementary - Building fundamental skills
  - **B1**: Intermediate - Achieving conversational fluency

- **🎮 Interactive Exercises** (6 types)
  - Multiple choice questions
  - Fill-in-the-blank exercises
  - Matching exercises
  - Typing/written responses
  - Listening comprehension
  - Speaking practice

- **💎 Freemium Model**
  - Free tier: A1 basics (3 lessons per skill)
  - Premium tier: Full access to all levels and premium features
  - Stripe integration for payments

- **📈 Progress Tracking**
  - User statistics and performance metrics
  - Lesson completion tracking
  - Achievement streaks
  - Time spent on lessons

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   cd deutschlernen
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx         # Landing page
│   ├── dashboard/       # User dashboard
│   ├── lessons/         # Lesson pages
│   ├── auth/            # Authentication pages
│   └── api/             # API routes
├── components/          # Reusable React components
│   ├── ui/              # Base UI components
│   ├── lessons/         # Lesson-specific components
│   ├── auth/            # Auth components
│   └── common/          # Common components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
└── styles/              # Global styles

prisma/
├── schema.prisma        # Database schema
└── migrations/          # Database migrations
```

## 🗄️ Database Schema

The application uses Prisma ORM with PostgreSQL. Key models:

- **User**: User accounts and authentication
- **Lesson**: Learning content organized by skill and level
- **Exercise**: Practice problems within lessons
- **Progress**: User lesson/exercise progress and scores
- **ExerciseSubmission**: Individual exercise attempt records
- **Payment**: Stripe subscription records
- **UserStatistics**: Aggregated user performance data

See `prisma/schema.prisma` for full details.

## 🔐 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/deutschlernen"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Deutsch Lernen"
```

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js (to be implemented)
- **Payments**: Stripe
- **Validation**: Server-side + client-side

### API Design
All API endpoints follow REST conventions and return standardized JSON responses:

```json
{
  "success": true,
  "data": {...},
  "message": "Operation successful"
}
```

## 📚 API Endpoints

### Lessons
```
GET    /api/lessons              # List all lessons
GET    /api/lessons/[id]         # Get single lesson
POST   /api/lessons              # Create lesson (admin)
PUT    /api/lessons/[id]         # Update lesson (admin)
DELETE /api/lessons/[id]         # Delete lesson (admin)
```

### Progress
```
GET    /api/progress/[lessonId]  # Get lesson progress
POST   /api/progress/[lessonId]  # Save lesson progress
GET    /api/progress/stats       # Get user statistics
```

### Users
```
GET    /api/users/profile        # Get user profile
GET    /api/users/premium        # Check premium status
POST   /api/users/register       # Register new user
POST   /api/users/login          # User login
```

### Payments
```
POST   /api/payment/create-subscription  # Create Stripe session
GET    /api/payment/status               # Check payment status
```

## 🧩 Key Components

### UI Components (`src/components/ui/`)
- **Button**: Customizable button with variants
- **Card**: Container component for content
- **Badge**: Status indicators

### Lesson Components (`src/components/lessons/`)
- **LessonCard**: Displays lesson in grid layout
- **Exercise**: Renders exercises based on type

### Custom Hooks (`src/hooks/`)
- **useAsync**: Handle async operations
- **usePremium**: Check user premium status
- **useUserProgress**: Fetch and track lesson progress
- **useForm**: Manage form state

## 📦 Available Scripts

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio
```

## 🎯 Development Roadmap

### Phase 1: MVP - A1 Content
- [x] Project scaffold
- [ ] Authentication system
- [ ] Lesson management (admin API)
- [ ] All 6 exercise types
- [ ] Progress tracking
- [ ] Dashboard

### Phase 2: Premium & Payments
- [ ] Stripe integration
- [ ] Premium content gating
- [ ] Subscription management

### Phase 3: A2 & B1 Levels
- [ ] A2 curriculum
- [ ] B1 curriculum

### Phase 4: Advanced Features
- [ ] Admin panel
- [ ] AI-powered feedback
- [ ] Mobile app

## 📖 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [NextAuth.js](https://next-auth.js.org)
- [Stripe API](https://stripe.com/docs/api)

---

**Happy Learning! 🚀🇩🇪📚**

For detailed project structure and implementation guide, see [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
