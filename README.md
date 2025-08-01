# AetherSync

> **Collaborative real-time chat & music playback**  
> Bring your friends together in virtual listening rooms—chat, queue, vote, and vibe to the same beat.

##  About

**AetherSync** is a prototype for a real-time, collaborative music experience built with modern web technologies. Users can:

- Create or join listening rooms  
- Chat live with synchronized playback controls  
- Build and manage a shared queue (add, vote, skip)  
- Experience low-latency, cross-device audio sync  

This README outlines the project vision, tech choices, and how to get started—even though it’s not yet deployed.

---

##  Features

- **Room Management**  
  - Create unique rooms, invite friends via link  
  - Basic access control: host vs. guest roles  

- **Real-Time Chat**  
  - Instant messaging with user presence indicators  
  - Typing indicators & read receipts  

- **Synchronized Playback**  
  - Play/pause/seek all clients in lockstep  
  - Millisecond-level drift correction  

- **Collaborative Queue**  
  - Add tracks (YouTube/Spotify URLs)  
  - Upvote/downvote to reorder or remove  
  - Host controls to lock queue  

- **Responsive UI**  
  - Mobile-first design with Tailwind CSS  
  - Smooth animations via Framer Motion  

---

##  Tech Stack

| Layer           | Technology                                 |
| --------------- | ------------------------------------------ |
| **Client**      | React, Tailwind CSS, Framer Motion        |
| **Server**      | Node.js, Express, Socket.IO               |
| **Data Layer**  | In-Memory (prototype) / Redis (future)     |
| **Sync Engine** | WebSockets (Socket.IO) + clock sync logic  |
| **Tooling**     | ESLint, Prettier, TypeScript (optional)    |
| **Testing**     | Jest, React Testing Library, Supertest     |

---

##  Architecture


1. **Client**  
   - React app with Context for chat & queue state  
   - Socket.IO client for real-time events  

2. **Server**  
   - Express HTTP endpoints for room creation, user management  
   - Socket.IO handlers for chat and playback commands  

3. **Sync Logic**  
   - Server broadcasts `play`, `pause`, `seek` events  
   - Clients apply simple clock-based offsets to stay in sync  

---

##  Installation & Setup

> **Prerequisites:** Node.js ≥14.x, npm or yarn

```bash
# 1. Clone the repo
git clone https://github.com/your-username/aethersync.git
cd aethersync

# 2. Install dependencies (server & client)
npm install
cd client && npm install
cd ../server && npm install

# 3. Start server
cd server
npm run dev   # listens on http://localhost:4000

# 4. Start client
cd ../client
npm run dev   # opens http://localhost:3000

▼ ▼
┌───────────┐ ┌────────────┐
│ User & │ │ Queue & │
│ Chat │ │ Sync │
│ Module │ │ Module │
└───────────┘ └────────────┘
