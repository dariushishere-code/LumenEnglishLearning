# Lumen - English Learning Platform

A fully vibe-coded bilingual (English/Persian) vocabulary learning platform with Telegram bot integration.

## ✨ Features

- **Daily Vocabulary**: Learn new words every day from two curated decks:
  - Daily English (1,024 everyday words)
  - Code/Programming (1,024 technical terms)
  
- **Bilingual Support**: Full English and Persian (Farsi) language support with RTL layout

- **Progress Tracking**: 
  - Streak counter for daily check-ins
  - Learned words tracking
  - Calendar view of your progress

- **Telegram Bot Integration**: Get daily vocabulary delivered directly to your Telegram

- **Modern UI**: Beautiful glassmorphism design with animated starfield background

- **Testimonials Section**: See what our community members say about their learning journey

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
```

**Where to get your Telegram Bot Token:**

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow the prompts to create your bot
4. Copy the API token provided by BotFather
5. Paste it in your `.env` file as `TELEGRAM_BOT_TOKEN`

> **Note**: The token is loaded from the `TELEGRAM_BOT_TOKEN` environment variable in the webhook handler at `/src/routes/api/telegram/webhook.ts`.

## 📱 Telegram Bot Setup

After getting your bot token:

1. Set the webhook URL to your deployed app's endpoint:
   ```
   https://api.telegram.org/bot<YOUR_TOKEN>/setWebhook?url=<YOUR_APP_URL>/api/telegram/webhook
   ```

2. Users can interact with the bot using commands:
   - `/start` - Welcome message
   - `/today` - Today's word
   - `/daily` - Switch to daily deck
   - `/code` - Switch to code deck
   - `/quiz` - Start a quiz
   - `/search <word>` - Look up a word
   - `/lang` - Toggle language
   - `/help` - Show all commands

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4
- **Routing**: TanStack Router
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Backend**: TanStack Start (server-side rendering)
- **Database**: PostgreSQL with Kysely ORM
- **Authentication**: Better Auth

## 📂 Project Structure

```
src/
├── components/       # React components
│   └── ui/          # Reusable UI components (including Testimonial)
├── lib/             # Utility functions and business logic
│   ├── words/       # Word data and utilities
│   ├── telegram/    # Telegram bot handler
│   └── auth/        # Authentication logic
├── routes/          # Page routes
│   ├── api/         # API endpoints
│   │   └── telegram/
│   │       └── webhook.ts  # Telegram webhook handler (uses TELEGRAM_BOT_TOKEN)
│   └── ...          # Page components
```

## 🎯 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run db:migrate   # Run database migrations
npm run typecheck    # Type check the project
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🌐 Deployment

The app is designed to be deployed on any platform that supports Node.js:

- Vercel
- Railway
- Render
- Fly.io

Make sure to set the `TELEGRAM_BOT_TOKEN` environment variable in your deployment platform.

## 🔑 Where to Put Your Telegram Token

Your Telegram bot token should be placed in one of these locations:

1. **Development**: Add it to your `.env` file:
   ```
   TELEGRAM_BOT_TOKEN=8909857697:AAF3yva4IFrlEHxF8uO_gVbfk07cyR4ZcYs
   ```

2. **Production**: Set it as an environment variable in your hosting platform

The token is accessed in the codebase at:
- `/src/routes/api/telegram/webhook.ts` line 15: `const token = process.env.TELEGRAM_BOT_TOKEN;`

## 📝 License

MIT

---

**Note**: This project was fully vibe-coded with AI assistance. 🤖✨
