# SAI - Smart AI Landing Page

## Overview
This is a React + Vite + TypeScript landing page for SAI (Smart AI), featuring AI-augmented Agile development platform. Built with modern web technologies including Tailwind CSS and shadcn/ui components.

## Project Architecture
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **Icons**: Lucide React

## Setup & Configuration
- **Development Server**: Configured to run on `0.0.0.0:5000` (required for Replit proxy)
- **Workflow**: Single workflow running `npm run dev`
- **Deployment**: Configured for autoscale deployment with build and start scripts

## Recent Changes
- **2025-09-25**: Imported from GitHub and configured for Replit environment
  - Updated Vite config to use host `0.0.0.0` and port `5000`
  - Added production `start` script using `vite preview`
  - Configured deployment settings for autoscale
  - Verified all dependencies and build process

## Key Features
The landing page includes:
- Hero section with AI-focused messaging
- Product features showcase
- How it works section
- Demo section
- Pricing information
- Responsive design with dark/light theme support

## Development
- Run `npm run dev` for development
- Run `npm run build` for production build
- Run `npm run start` for production preview
- All commands configured to work in Replit environment