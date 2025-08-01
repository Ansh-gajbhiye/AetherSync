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

## 🛠 Tech Stack

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

