# Travel Agency Dashboard V2

A full-stack travel agency admin dashboard. Track users and trips, view analytics, and (coming soon) generate trip itineraries with AI.

> 🚧 **Status:** In progress. The core dashboard works. AI trip generation is being added.

## Features

- 📊 Admin dashboard with user growth and trip analytics
- 📈 Interactive charts and data grids
- 👥 User management (All Users page)
- 🧳 Trip management and detailed trip overview
- 🔐 Authentication and database with Appwrite
- 🐞 Error tracking with Sentry
- ⚡ Server-side rendering with React Router
- 🤖 *Planned:* AI trip itineraries with Google Gemini

## Screenshots

<table>
  <tr>
    <td><img src="./public/assets/pic%200.png" alt="Screenshot 1" width="100%" /></td>
    <td><img src="./public/assets/pic%201.png" alt="Screenshot 2" width="100%" /></td>
  </tr>
  <tr>
    <td><img src="./public/assets/pic%202.png" alt="Screenshot 3" width="100%" /></td>
    <td><img src="./public/assets/pic%203.png" alt="Screenshot 4" width="100%" /></td>
  </tr>
</table>

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | React 19, React Router 8 (SSR) |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS 4 |
| UI components | Syncfusion |
| Backend, auth, database | Appwrite |
| Monitoring | Sentry |
| AI | Google Gemini (`@google/generative-ai`) |


## Getting Started

### Prerequisites

- Node.js and npm
- [Appwrite](https://appwrite.io/) project
- [Syncfusion](https://www.syncfusion.com/) license key
- [Gemini API key](https://aistudio.google.com/) (for AI features)
- [Sentry](https://sentry.io/) project (optional)

### Installation

```bash
git clone https://github.com/1Naifoo/Travel-Agency-DashboardV2.git
cd Travel-Agency-DashboardV2
npm install
```

### Environment Variables

Create a `.env` file in the project root. Check the names against what your code reads.

```env
VITE_SYNCFUSION_LICENSE_KEY=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_API_ENDPOINT=
VITE_APPWRITE_API_KEY=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_USERS_COLLECTION_ID=
VITE_APPWRITE_ITINERARY_COLLECTION_ID=
GEMINI_API_KEY=
VITE_BASE_URL=http://localhost:5173
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:5173`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Generate route types and run TypeScript |


## Project Structure

```
├── app/                  # Routes and app code
├── components/           # Reusable UI components
├── public/assets/        # Static assets
├── instrument.server.mjs # Sentry setup
├── Dockerfile
└── package.json
```

## Roadmap

- [ ] AI trip generation with Gemini
- [ ] More analytics views

## Author

**Naif Omran** · [@1Naifoo](https://github.com/1Naifoo)
