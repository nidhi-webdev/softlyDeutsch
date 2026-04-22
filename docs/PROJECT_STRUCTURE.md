# Deutsch Lernen - German Learning Platform

## 📋 Complete Project Overview

A comprehensive German language learning platform built with Next.js, featuring A1-B1 level courses with interactive exercises for four key skills: Reading (Lesen), Writing (Schreiben), Listening (Hören), and Speaking (Sprechen).

### Key Features
- **Free & Premium Tiers**: Free access to A1 basics, premium for advanced content
- **4 Learning Skills**: Reading, Writing, Listening, Speaking
- **Multiple Levels**: A1 (Beginner), A2 (Elementary), B1 (Intermediate)
- **Interactive Exercises**: Multiple choice, fill-in-the-blank, listening, typing, speaking
- **Progress Tracking**: User statistics, completion rates, performance analytics
- **Payment Integration**: Stripe for premium subscriptions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

---

## 🏗️ Project Structure

```
deutschlernen/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.tsx                  # Landing page
│   │   ├── dashboard/                # User dashboard
│   │   ├── lessons/                  # Lesson pages
│   │   ├── auth/                     # Auth pages (login, signup)
│   │   ├── pricing/                  # Pricing page
│   │   ├── api/                      # API routes
│   │   │   ├── lessons/              # Lesson endpoints
│   │   │   ├── progress/             # Progress tracking
│   │   │   ├── users/                # User management
│   │   │   ├── payment/              # Payment processing
│   │   │   └── auth/                 # Authentication
│   │   └── layout.tsx                # Root layout
│   │
│   ├── components/                   # Reusable React components
│   │   ├── ui/                       # UI components (Button, Card, Badge)
│   │   ├── lessons/                  # Lesson-specific components
│   │   │   ├── LessonCard.tsx
│   │   │   ├── Exercise.tsx
│   │   │   └── LessonViewer.tsx
│   │   ├── common/                   # Common components (Header, Footer)
│   │   └── auth/                     # Auth components (LoginForm, SignupForm)
│   │
│   ├── lib/                          # Utility functions
│   │   ├── utils.ts                  # General utilities
│   │   ├── db/                       # Database utilities
│   │   ├── auth/                     # Auth utilities
│   │   └── payment/                  # Payment utilities
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useAsync.ts               # Async operations
│   │   ├── usePremium.ts             # Premium status check
│   │   └── useUserProgress.ts        # Progress tracking
│   │
│   ├── types/                        # TypeScript types
│   │   └── index.ts                  # All type definitions
│   │
│   └── styles/                       # Global styles
│
├── prisma/
│   ├── schema.prisma                 # Database schema
│   └── migrations/                   # Database migrations
│
├── public/                           # Static assets
├── .env.example                      # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🗄️ Database Schema (Prisma)

### Models

#### User
- Authentication and profile management
- Premium status tracking
- Premium expiration date

#### Lesson
- Core learning content for each skill and level
- Rich text content support
- Audio/image URLs
- Difficulty level and estimated duration

#### Exercise
- Individual practice problems within lessons
- 6 types: multiple-choice, fill-blank, matching, typing, listening, speaking
- Answer validation and explanations

#### Progress
- Tracks user completion and scoring
- Lesson-by-lesson progress
- Time spent tracking

#### ExerciseSubmission
- Stores individual exercise attempts
- User answers and scoring history
- Feedback for each attempt

#### Payment
- Stripe integration records
- Premium subscription tracking
- Payment status management

#### Quiz
- Assessment tests for each skill and level
- Passing score requirements

#### UserStatistics
- Aggregated user performance data
- Streaks and milestones
- Total learning time

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database
- Stripe account (for payments)

### Installation

1. **Clone and install dependencies**
   ```bash
   cd deutschlernen
   npm install
   ```

2. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

3. **Setup database**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

### Environment Variables
See `.env.example` for complete list. Critical ones:
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_URL`: App URL for auth
- `NEXTAUTH_SECRET`: Random secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe key
- `STRIPE_SECRET_KEY`: Stripe secret

---

## 📚 A1 Level Content Structure (Initial Implementation)

### Lessons per Skill (12-15 lessons each)

#### **Lesen (Reading)**
1. **Basics**: Alphabet, greetings, common phrases
2. **Simple Texts**: Personal introductions, daily activities
3. **Comprehension**: Reading emails, simple articles
4. **Vocabulary**: Common nouns, verbs, adjectives
5. **Grammar**: Present tense, gender, plurals

#### **Schreiben (Writing)**
1. **Basics**: Writing German letters and numbers
2. **Sentences**: Simple present tense sentences
3. **Descriptions**: Personal information, likes/dislikes
4. **Paragraphs**: About yourself, daily routine
5. **Emails**: Informal email writing

#### **Hören (Listening)**
1. **Basics**: Individual words and sounds
2. **Phrases**: Common expressions with audio
3. **Conversations**: Simple dialogues
4. **Instructions**: Understanding directions
5. **Comprehension**: Listening to short stories

#### **Sprechen (Speaking)**
1. **Pronunciation**: German sounds and accents
2. **Phrases**: Common conversational phrases
3. **Dialogues**: Role-play scenarios
4. **Descriptions**: Describing objects and people
5. **Questions**: Asking and answering questions

---

## 🔧 Core Features Implementation Guide

### 1. **User Authentication**
- NextAuth.js setup
- JWT-based session management
- Social login (optional: Google, GitHub)
- Email/password authentication

### 2. **Lesson Management**
- CRUD operations for lessons
- Content versioning
- Audio/video attachment support
- Difficulty level selection

### 3. **Exercise System**
- 6 exercise types
- Auto-grading for objective questions
- Manual review for subjective (speaking/writing)
- Instant feedback mechanism

### 4. **Progress Tracking**
- Lesson completion status
- Exercise scoring
- Time tracking
- Streak management
- Statistics dashboard

### 5. **Premium System**
- Free tier limitations (3 lessons per skill)
- Premium tier features
- Stripe payment integration
- Subscription management
- Expiration handling

### 6. **Admin Dashboard** (Future)
- Lesson CRUD
- User management
- Analytics viewing
- Content moderation

---

## 📝 API Endpoints (Summary)

### Lessons
- `GET /api/lessons` - Get all lessons (with filtering)
- `GET /api/lessons/[id]` - Get single lesson
- `POST /api/lessons` - Create lesson (admin)
- `PUT /api/lessons/[id]` - Update lesson (admin)
- `DELETE /api/lessons/[id]` - Delete lesson (admin)

### Progress
- `GET /api/progress/[lessonId]` - Get lesson progress
- `POST /api/progress/[lessonId]` - Save progress
- `GET /api/progress/stats` - Get user statistics

### Users
- `GET /api/users/premium` - Check premium status
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile

### Exercises
- `GET /api/exercises/[id]` - Get exercise
- `POST /api/exercises/[id]/submit` - Submit answer
- `GET /api/exercises/[id]/feedback` - Get feedback

### Payments
- `POST /api/payment/create-subscription` - Create subscription
- `GET /api/payment/webhook` - Stripe webhook
- `GET /api/payment/status` - Check payment status

---

## 🎨 UI Components

### Base Components (`src/components/ui/`)
- **Button**: Primary, secondary, danger, ghost variants
- **Card**: Container component with header/content
- **Badge**: Status indicators with variants
- **Input**: Form input with validation
- **Modal**: Dialog component (to be created)

### Lesson Components (`src/components/lessons/`)
- **LessonCard**: Display lesson in grid
- **Exercise**: Render exercise based on type
- **LessonViewer**: Full lesson view with navigation
- **ProgressBar**: Show lesson/course progress

### Common Components (`src/components/common/`)
- **Header/Navigation**: App header with links
- **Footer**: App footer
- **Sidebar**: Navigation sidebar (optional)

---

## 🔐 Security Considerations

1. **Authentication**: JWT with secure cookies
2. **Authorization**: Role-based access (user/admin)
3. **Input Validation**: Server-side validation for all inputs
4. **CORS**: Properly configured CORS
5. **Rate Limiting**: API rate limiting to prevent abuse
6. **Password Hashing**: bcrypt for password storage
7. **Environment Variables**: Never commit secrets
8. **SSL/HTTPS**: Required in production

---

## 📊 Performance Optimization

1. **Code Splitting**: Next.js automatic code splitting
2. **Image Optimization**: Use Next.js Image component
3. **Lazy Loading**: Lazy load components and routes
4. **Database Indexing**: Proper database indexes
5. **Caching Strategy**: API response caching
6. **Bundle Analysis**: Monitor bundle size

---

## ✅ Testing Strategy

### Unit Tests
- Utility functions
- Custom hooks
- Component logic

### Integration Tests
- API endpoints
- Database operations
- Payment flow

### E2E Tests
- User signup/login
- Lesson completion
- Premium upgrade

---

## 🚀 Deployment Guide

### Vercel (Recommended)
```bash
# Push to GitHub
# Connect to Vercel
# Set environment variables
# Deploy
```

### Docker
```bash
# Build image
# Push to container registry
# Deploy to hosting service
```

### Key Steps
1. Set up production database
2. Configure environment variables
3. Run migrations
4. Setup Stripe webhooks
5. Configure email service
6. Setup analytics

---

## 🛣️ Development Roadmap

### Phase 1: MVP (A1 Level)
- ✅ Project setup
- [ ] Authentication system
- [ ] Lesson CRUD (admin API)
- [ ] Exercise system (all 6 types)
- [ ] Progress tracking
- [ ] Basic dashboard

### Phase 2: Premium & Payments
- [ ] Stripe integration
- [ ] Payment processing
- [ ] Premium content gating
- [ ] Subscription management
- [ ] Enhanced analytics

### Phase 3: A2 & B1 Levels
- [ ] A2 curriculum content
- [ ] B1 curriculum content
- [ ] Difficulty progression
- [ ] Adaptive learning

### Phase 4: Advanced Features
- [ ] Admin dashboard
- [ ] AI-powered feedback
- [ ] Speech recognition
- [ ] Mobile app
- [ ] Community features
- [ ] Gamification

---

## 📖 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://next-auth.js.org)
- [Stripe Documentation](https://stripe.com/docs)

---

## 👥 Contributing

Guidelines for contributing will be added as the project grows.

---

## 📄 License

[Add your license here]

---

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Happy Learning! 🚀📚🇩🇪**
