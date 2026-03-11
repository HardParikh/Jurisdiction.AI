# Jurisdiction.AI

AI powered jurisdiction research and document analysis platform built with Next.js, TypeScript, Supabase, and modern LLM integrations.

**Built by Hard Parikh**

---

## Overview

Jurisdiction.AI is a full stack AI application designed to make jurisdiction specific research faster, more organized, and easier to use. It combines a modern web interface with powerful language models, real time backend services, and a scalable developer friendly architecture.

The platform is built for users who need:
- fast AI assisted research workflows
- clean conversational interfaces
- structured document and query handling
- secure authentication and data storage
- support for multiple model providers

---

## What the project does

Jurisdiction.AI helps users interact with AI models through a polished interface that supports research, contextual chat, and structured information retrieval.

Core capabilities include:
- AI chat for jurisdiction focused questions
- multi model support across leading AI providers
- modern responsive dashboard and chat experience
- authentication and user session management
- database backed conversation storage
- reusable UI components built with a clean design system
- smooth animations and polished interactions
- scalable backend powered by Supabase

---

## Key Features

### Multi model AI support
The app is designed to work with multiple AI providers so responses can be tailored for different use cases such as depth, speed, or cost.

Supported integrations include:
- OpenAI
- Anthropic
- Google Gemini
- Mistral
- Cohere
- Together AI
- OpenRouter
- Hugging Face

### Conversational research experience
Users can ask questions, explore responses, revisit previous chats, and work through research tasks in a clean chat workflow.

### Authentication and user management
Supabase Auth is used for secure sign in, session handling, and protected user specific data access.

### Modern frontend architecture
Built with Next.js and TypeScript using reusable UI primitives, responsive layouts, and animation driven polish.

### Scalable backend foundation
Supabase provides database, auth, APIs, and real time capabilities, giving the application a strong production ready foundation.

---

## Tech Stack

### Frontend
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- Framer Motion
- Lucide React

### Backend and data
- Supabase
- PostgreSQL
- Supabase Auth
- Real time APIs
- Edge Functions

### AI integrations
- OpenAI
- Anthropic
- Google Gemini
- Mistral
- Cohere
- Together AI
- OpenRouter
- Hugging Face

---

## Architecture

The application follows a modern full stack architecture:

- **Frontend:** Next.js App Router with reusable React components
- **UI Layer:** Tailwind CSS, shadcn/ui, and Radix primitives
- **Animation Layer:** Framer Motion for transitions and micro interactions
- **Backend:** Supabase for authentication, data storage, and server side workflows
- **AI Layer:** pluggable model integrations for different response strategies

### High level flow
1. User signs in
2. User submits a research prompt or query
3. Request is routed to the selected AI model
4. Response is processed and displayed in the UI
5. Session history and relevant metadata are stored in the backend

---

## UI and Product Highlights

- clean landing experience
- modern chat interface
- responsive layouts across desktop and mobile
- smooth hover states and transitions
- accessible component structure
- consistent design system
- fast and focused user flows

---

## Quick Start

### Prerequisites
Make sure you have:
- Node.js 18+
- npm, yarn, or pnpm
- a Supabase project
- API keys for the model providers you plan to use

### Clone the repository
```bash
git clone https://github.com/HardParikh/Jurisdiction.AI.git
cd Jurisdiction.AI
